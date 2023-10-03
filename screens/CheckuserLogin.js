import { View, Text } from "react-native";
import React, { useContext } from "react";
import AppStack from "../navigation/AppStack";
import AuthStack from "../navigation/AuthStack";
import { UserContext, UserType } from "../context/UserContext";

const CheckuserLogin = () => {
  const { loginUser, setLoginUser } = useContext(UserType);

  return <>{loginUser ? <AppStack /> : <AuthStack />}</>;
};

export default CheckuserLogin;
