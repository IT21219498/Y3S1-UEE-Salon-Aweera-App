const request = require("supertest");
const app = require("../../api/index");
const mongoose = require("mongoose");
const Appointment = require("../models/appointment");
const Category = require("../models/category");

describe("Appointment Route", () => {
  let server;

  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://csvithanage14:LyX2wgASS9ASYdC9@cluster0.wrei5cf.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  }, 100000); // Set a long timeout for beforeAll

  afterAll(async () => {
    await mongoose.connection.close();
    if (server) {
      server.close();
    }
  });

  describe("POST /appointment", () => {
    beforeAll((done) => {
      server = app.listen(3000, done);
    }, 30000); 

    //Positive Test Case
    it("should create a new appointment", async () => {
      const appointment = {
        userId: "64f5cdeeecf0ac5a7e83adb5",
        category: "Haircut",
        package: "Basic",
        stylist: "John Doe",
        date: "2022-01-01",
        time: "10:00",
      };

      const res = await request(server)
        .post("/appointment/create")
        .send(appointment);

      expect(res.statusCode).toBe(201);
    }, 30000); // Set a timeout of 20 seconds
  });

  //Positive Test Case
  it("should create a new category", async () => {
    const category = {
      name: "Haircut",
      imageUrl: "https://i.imgur.com/0y8Ftya.jpg",
      packages: [
        {
          name: "Basic",
          imageUrl: "https://i.imgur.com/0y8Ftya.jpg",
        },
        {
          name: "Premium",
          imageUrl: "https://i.imgur.com/0y8Ftya.jpg",
        },
      ],
    };

    const res = await request(server).post("/category/create").send(category);

    expect(res.statusCode).toBe(201);
  }, 10000); // Set a timeout of 20 seconds

  it("should return a list of categories", async () => {
    const res = await request(server).get("/category");

    expect(res.statusCode).toBe(200);
  });

  //test case for create a feedback
  it("should create a new feedback", async () => {
    const feedback = {
      customerName: "John Doe",
      contactNo: "0712345678",
      feedback: "Good service",
    };

    const res = await request(server).post("/feedback/create").send(feedback);

    expect(res.statusCode).toBe(201);
  });
});
