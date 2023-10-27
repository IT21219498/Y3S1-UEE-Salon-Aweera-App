import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import React, { useCallback } from "react";
import Header from "../components/Header";
import { useEffect } from "react";
import { useContext } from "react";
import { UserType } from "../context/UserContext";
import { useState } from "react";
import axios from "axios";
import {
  AntDesign,
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const SavedPostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const { user, setUser } = useContext(UserType);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    fetchPosts();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `http://192.168.1.6:5000/get-saved-posts/${userId}`
      );
      const { posts } = res.data;
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

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

  const handleUnSavePost = async (postId) => {
    try {
      const res = await axios.put(
        `http://192.168.1.6:5000/unsave-post/${postId}/${userId}`
      );

      onRefresh();
    } catch (err) {
      console.log("Error saving post", err);
    }
  };

  return (
    <View style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title={"Saved Posts"} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ flex: 1, backgroundColor: "#F7F0FC" }}
      >
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

export default SavedPostsScreen;

const styles = StyleSheet.create({});
