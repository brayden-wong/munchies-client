import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useAuthStore } from "../../../stores";

const Home = () => {
  const { at, rt, userId } = useAuthStore();

  return (
    <View>
      <Text>home</Text>
      <Text>{userId}</Text>
    </View>
  );
};

export default Home;
