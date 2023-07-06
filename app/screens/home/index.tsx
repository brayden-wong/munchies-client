import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const Home = () => {
  const [at, setAt] = React.useState<string | null>();
  const [rt, setRt] = React.useState<string | null>();
  const [userId, setUserId] = React.useState<string | null>();

  new Promise(async () => {
    await AsyncStorage.getItem("at").then((value) => setAt(value));
    await AsyncStorage.getItem("rt").then((value) => setRt(value));
    await AsyncStorage.getItem("userId").then((value) => setUserId(value));
  });

  return (
    <View>
      <Text>home</Text>
      <Text>{at}</Text>
      <Text>{rt}</Text>
      <Text>{userId}</Text>
    </View>
  );
};

export default Home;
