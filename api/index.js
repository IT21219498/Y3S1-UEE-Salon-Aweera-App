const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");
const nodemailer = require("nodemailer");
const morgan = require("morgan");

const app = express();
const port = 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/appointment", require("./routes/appointment"));
app.use("/category", require("./routes/category"));
app.use("/feedback", require("./routes/feedback"));
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://csvithanage14:LyX2wgASS9ASYdC9@cluster0.wrei5cf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!");
  });

app.listen(port, () => {
  console.log("Server started on port " + port);
});

const User = require("./models/user");
const Post = require("./models/post");

//endpoint to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existigUser = await User.findOne({ email });
    if (existigUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //create a new user
    const newUser = new User({ name, email, password });

    //genearte and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save the user to the backend
    await newUser.save();

    //send the verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    //send the response
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log("error registering user", err);
    res.status(500).json({ message: "error registering user" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "csvithanage14@gmail.com",
      pass: "wqfmhqfhdecjdjop",
    },
  });

  //compose the email message
  const mailOptions = {
    from: "salonAweera.lk",
    to: email,
    subject: "Verify your email",
    text: `Please click on the link below to verify your email \n\n http://10.0.2.2:8000/verify-email/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("error sending email", err);
  }
};

app.get("/verify-email/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.log("error gettting token", err);
    res.status(500).json({ message: "Email verification failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

//endpoint to create a new post
app.post("/create-post", async (req, res) => {
  try {
    const { content, userId, PostImage } = req.body;

    const newPostData = {
      user: userId,
    };
    if (content) {
      newPostData.content = content;
    }
    if (PostImage) {
      newPostData.PostImage = PostImage;
    }

    const newPost = new Post(newPostData);

    await newPost.save();

    res.status(200).json({ message: "Post saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Post creation failed" });
  }
});

//endpoint for liking a particular post
app.put("/posts/:postId/:userId/like", async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await Post.findById(postId).populate("user", "name");

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $addToSet: { likes: userId },
      },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    updatedPost.user = post.user;

    res.json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occured while liking a post" });
  }
});

//endpoint for unliking a particular post
app.put("/posts/:postId/:userId/unlike", async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await Post.findById(postId).populate("user", "name");

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $pull: { likes: userId },
      },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    updatedPost.user = post.user;

    res.json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occured while unliking a post" });
  }
});

//endpoint to get all the posts
app.get("/get-posts", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", ["name", "profilePicture"])
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occured while getting the posts" });
  }
});

//endpoint for get profile data
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error while getting the profile data" });
  }
});

//endpoint for updating the profile data
app.put("/update-user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, ProfilePicture } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) {
      user.name = name;
    }
    if (ProfilePicture) {
      user.profilePicture = ProfilePicture;
    }

    await user.save();

    return res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error while updating the profile data" });
  }
});
