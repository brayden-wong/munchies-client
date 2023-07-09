import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = (props: any) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#ccc", // Choose your desired header background color
    height: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
    borderBottomRightRadius: 640,
    borderBottomLeftRadius: 5340,
    borderTopRightRadius: 5650,
    borderTopLeftRadius: 640,
    width: "95%",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: "2%",
    color: "#0b0b0b", // Choose your desired text color
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

export default Header;
