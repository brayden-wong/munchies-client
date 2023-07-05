import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import Navigation from "../../../components/Navigation";
import Home from "../home";
import Explore from "../explore";
import Recipe from "../recipe";
import Chat from "../chat";
import Profile from "../profile";

const Tabs = () => {
  const [selected, setSelected] = React.useState(0);
  const pages = [
    <Home></Home>,
    <Explore></Explore>,
    <Recipe></Recipe>,
    <Chat></Chat>,
    <Profile></Profile>,
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView>{pages[selected]}</SafeAreaView>
      <Navigation selected={selected} setSelected={setSelected}></Navigation>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default Tabs;
