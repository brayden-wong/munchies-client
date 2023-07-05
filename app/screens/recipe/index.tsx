import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "../../../components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipe() {
  const [selected, setSelected] = React.useState(1);
  return (
    <View style={styles.container}>
      <Text>Recipe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
