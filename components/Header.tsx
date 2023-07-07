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
    backgroundColor: "#FBC02D", // Choose your desired header background color
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF", // Choose your desired text color
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

export default Header;
