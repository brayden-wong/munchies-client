import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Icons from "react-native-heroicons/mini";

import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../../../components/Header";
import HiddenInput from "../hiddenInput";
const AddSteps = (props: any) => {
  const [name, changename] = React.useState("");
  const [description, changeDescription] = React.useState("");

  return (
    <Modal
      visible={props.modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.setModalVisible(false)}>
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => props.setModalVisible(false)}>
          <Icons.ChevronDownIcon color={"#0b0b0b"} size={90} />
        </TouchableOpacity>
        <Header title={"Add Recipe"}></Header>
        <View style={styles.inputs}>
          <HiddenInput title="Name" value={name} setValue={changename} />
          <HiddenInput
            title="Description"
            value={description}
            multiline={true}
            setValue={changeDescription}
          />
          <HiddenInput
            title="Ingredients"
            value={description}
            setValue={changeDescription}
          />
          <HiddenInput
            title="Steps"
            value={description}
            setValue={changeDescription}
          />

          <Button
            title={"Add"}
            onPress={() => console.log(name, description)}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    position: "relative",
    top: "-3%",
    marginBottom: "-12%",
  },
  modalContainer: {
    flexDirection: "column",
    // top: "25%",
    padding: "5%",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "120%",
    backgroundColor: "#dbdbdb",
  },
  inputs: {
    flexDirection: "column",
    width: "92%",
    height: "50%",
    position: "relative",
    top: "5%",
  },
});
export default AddSteps;
