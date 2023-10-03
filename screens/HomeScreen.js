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
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const HomeScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     title: "Explore Salon Feed",
  //     headerTitleStyle: {
  //       fontSize: 20,
  //       fontWeight: "bold",
  //       color: "black",
  //     },
  //     headerStyle: {
  //       backgroundColor: "#735D7F",
  //       height: 80,
  //     },
  //     headerTitleAlign: "center", // Center-align the title
  //     headerTitleContainerStyle: {
  //       justifyContent: "center", // Center-align the title container
  //     },
  //     headerLeft: () => null, // Hide the left header component
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{ marginRight: 15 }}
  //         onPress={() => handleImageClick()}
  //       >
  //         <FontAwesome name='bell' size={24} color='black' marginRight='10' />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  // const handleImageClick = () => {
  //   navigation.navigate("MyAppointments");
  // };

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

    axios
      .post("http://192.168.1.6:5000/create-post", postData)
      .then((response) => {
        setContent("");
      })
      .catch((err) => {
        console.log("error creating post", err);
      });
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
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title={"Explore Salon Feed"} />
      <ScrollView style={{ flex: 1, backgroundColor: "#F7F0FC" }}>
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
            }}
          >
            <TextInput
              style={{
                color: "grey",
                marginVertical: 10,
                width: "100%", // Take up available width
                padding: 10, // Add padding inside input
              }}
              value={content}
              onChangeText={(text) => setContent(text)}
              placeholderTextColor={"black"}
              placeholder='Type your message...'
              multiline
            />
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
                  style={{
                    width: 40,
                    height: 40,
                    // borderradius: 20,
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}
                >
                  {post?.user?.name}
                </Text>
                <Text>{post?.content}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 15,
                  }}
                >
                  {post?.likes?.includes(userId) ? (
                    <AntDesign
                      onPress={() => handleDisLike(post?._id)}
                      name='heart'
                      size={18}
                      color='red'
                    />
                  ) : (
                    <AntDesign
                      onPress={() => handleLike(post?._id)}
                      name='hearto'
                      size={18}
                      color='black'
                    />
                  )}

                  <FontAwesome name='comment-o' size={18} color='black' />
                  <Ionicons
                    name='share-social-outline'
                    size={18}
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
    </SafeAreaView>
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
