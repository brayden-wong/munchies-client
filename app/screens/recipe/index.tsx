import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Navigation from "../../../components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/mini";
import { Header } from "react-native-elements";
export default function Recipe() {
  const [selected, setSelected] = React.useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Icons.PlusCircleIcon color={"#0b0b0b"} size={40} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    height: "100%",
  },
  icon: {
    position: "absolute",
    bottom: "10%",
    right: "6%",
  },
});
