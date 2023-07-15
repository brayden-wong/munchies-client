import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Navigation from "../../../components/Navigation";
import Home from "../home";
import Explore from "../explore";
import Recipe from "../recipe";
import Chat from "../chat";
import Profile from "../profile";
import Header from "../../../components/Header";
import { useSocketStore } from "@stores/socket.store";
import { useAuthStore } from "@stores/auth.store";
import type { Response } from "@utils/types";
import { type Rooms, useRoomStore } from "@stores/room.store";

const Tabs = () => {
  const [selected, setSelected] = React.useState(0);
  const pages = [
    <Home></Home>,
    <Explore></Explore>,
    <Recipe></Recipe>,
    <Chat></Chat>,
    <Profile></Profile>,
  ];
  const titles = ["Home", "Explore", "Recipe", "Chat", "Profile"];
  const { connect, disconnect } = useSocketStore();
  const { rooms, setRooms } = useRoomStore();
  const { user } = useAuthStore();

  useEffect(() => {
    const initializeSocket = async () => {
      const socket = await connect();

      socket.on("rooms", (data: Response<Rooms>) => {
        if (data.status === "ok") {
          console.log(data.data);
          setRooms(data.data);
        }
      });
    };

    initializeSocket();

    return () => disconnect();
  }, []);

  console.log("rooms", rooms);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={titles[selected]}></Header>
      <View style={styles.content}>{pages[selected]}</View>
      <Navigation selected={selected} setSelected={setSelected}></Navigation>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    height: "100%",
    width: "100%",
  },
  content: {
    height: "100%",
    width: "100%",
  },
});

export default Tabs;
