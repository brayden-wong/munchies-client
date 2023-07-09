import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import Navigation from "../../../components/Navigation";
import Home from "../home";
import Explore from "../explore";
import Recipe from "../recipe";
import Chat from "../chat";
import Profile from "../profile";
import Header from "../../../components/Header";

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
