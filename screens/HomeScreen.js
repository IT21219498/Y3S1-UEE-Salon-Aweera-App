import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { UserType } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  AntDesign,
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import * as ImagePicker from "expo-image-picker";

const HomeScreen = () => {
  const { userId, setUserId, user, setUser } = useContext(UserType);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    fetchPosts();
    fetchProfile();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchPosts();
      fetchProfile();
    }, [])
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUsers();
  }, []);
  const handlePostSubmit = () => {
    const postData = {
      userId,
    };
    if (content) {
      postData.content = content;
    }
    if (image) {
      postData.PostImage = image;
    }

    axios
      .post("http://192.168.1.6:5000/create-post", postData)
      .then((response) => {
        onRefresh();
        setContent("");
        setImage(null);
      })
      .catch((err) => {
        console.log("error creating post", err);
      });
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`http://192.168.1.6:5000/profile/${userId}`);
      const { user } = res.data;
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://192.168.1.6:5000/get-posts");
      // console.log("posts", res.data);

      setPosts(res.data);
    } catch (err) {
      console.log("error fetching posts", err);
    }
  };

  const handleLike = async (postId) => {
    try {
      const res = await axios.put(
        `http://192.168.1.6:5000/posts/${postId}/${userId}/like`
      );
      const updatedPost = res.data;
      const updatedPosts = posts?.map((post) =>
        post?._id === updatedPost._id ? updatedPost : post
      );

      setPosts(updatedPosts);
    } catch (err) {
      console.log("error liking post", err);
    }
  };

  const handleDisLike = async (postId) => {
    try {
      const res = await axios.put(
        `http://192.168.1.6:5000/posts/${postId}/${userId}/unlike`
      );
      const updatedPost = res.data;
      const updatedPosts = posts?.map((post) =>
        post?._id === updatedPost._id ? updatedPost : post
      );

      setPosts(updatedPosts);
    } catch (err) {
      console.log("Error unliking post", err);
    }
  };

  const handleSavePost = async (postId) => {
    try {
      const res = await axios.put(
        `http://192.168.1.6:5000/save-post/${postId}/${userId}`
      );
      fetchProfile();
    } catch (err) {
      console.log("Error saving post", err);
    }
  };

  const handleUnSavePost = async (postId) => {
    try {
      const res = await axios.put(
        `http://192.168.1.6:5000/unsave-post/${postId}/${userId}`
      );
      fetchProfile();
    } catch (err) {
      console.log("Error saving post", err);
    }
  };
  return (
    <View style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title={"Explore Salon Feed"} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ flex: 1, backgroundColor: "#F7F0FC" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            marginTop: 2,
          }}
        >
          <View
            style={{
              flex: 1, // Take up available space
              marginRight: 10, // Add spacing between input and button
              backgroundColor: "white", // Background color for input
              borderRadius: 10,
              borderColor: "#AB83A1",
              borderWidth: 1,
              flexDirection: "row", // Align items in one line
              alignItems: "center", // Center items vertically
              marginTop: 15,
            }}
          >
            <TextInput
              style={{
                color: "grey",
                marginVertical: 10,
                width: "70%", // Take up 70% of available width
                padding: 10, // Add padding inside input
              }}
              value={content}
              onChangeText={(text) => setContent(text)}
              placeholderTextColor={"black"}
              placeholder='Type your caption here...'
              multiline
            />

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                <MaterialIcons
                  name='add-photo-alternate'
                  size={35}
                  color='black'
                />
              </TouchableOpacity>
              {image && (
                <>
                  <View style={{ marginRight: 20 }}>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        margin: 10,
                      }}
                    />

                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() => setImage(null)}
                    >
                      <MaterialIcons name='cancel' size={30} color='red' />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handlePostSubmit}
          title='Share'
        >
          <Text style={styles.buttonText}>Share Post</Text>
        </TouchableOpacity>

        <View style={{ marTop: 20 }}>
          {posts?.map((post) => (
            <View
              style={{
                padding: 15,
                borderColor: "#D0D0D0",
                borderTopWidth: 1,
                flexDirection: "row",
                gap: 10,
                marginVertical: 10,
              }}
            >
              <View>
                <Image
                  source={{ uri: post?.user?.profilePicture }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 25,
                  }}
                />
              </View>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginBottom: 4,
                    }}
                  >
                    {post?.user?.name}
                  </Text>

                  <View
                    style={{ marginLeft: 100, flexDirection: "row", gap: 10 }}
                  >
                    {user.SavedPosts?.includes(post?._id) ? (
                      <FontAwesome
                        name='bookmark'
                        size={28}
                        color='black'
                        onPress={() => handleUnSavePost(post?._id)}
                      />
                    ) : (
                      <FontAwesome
                        name='bookmark-o'
                        size={28}
                        color='black'
                        onPress={() => handleSavePost(post?._id)}
                      />
                    )}

                    <Entypo
                      name='dots-three-vertical'
                      size={28}
                      color='black'
                    />
                  </View>
                </View>
                <Text>{post?.content}</Text>
                {post?.PostImage && (
                  <Image
                    source={{ uri: post?.PostImage }}
                    style={{
                      width: 300,
                      height: 200,
                      borderRadius: 10,
                      marginVertical: 10,
                    }}
                  />
                )}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 10,
                  }}
                >
                  {post?.likes?.includes(userId) ? (
                    <AntDesign
                      onPress={() => handleDisLike(post?._id)}
                      name='heart'
                      size={28}
                      color='red'
                    />
                  ) : (
                    <AntDesign
                      onPress={() => handleLike(post?._id)}
                      name='hearto'
                      size={28}
                      color='black'
                    />
                  )}
                  <Ionicons
                    name='share-social-outline'
                    size={28}
                    color='black'
                  />
                </View>
                <Text style={{ marginTop: 7, color: "gray" }}>
                  {post?.likes?.length} likes {post?.replies?.length} reply
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 30,
    marginLeft: 270,
    backgroundColor: "#735D7F",
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
