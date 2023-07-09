import * as Icons from "react-native-heroicons/mini";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import AddRecipe from "./create";

export default function Recipe() {
  const [selected, setSelected] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.icon}>
        <Icons.PlusCircleIcon color={"#0b0b0b"} size={40} />
      </TouchableOpacity>
      <AddRecipe
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
    bottom: "24.5%",
    right: "6%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
