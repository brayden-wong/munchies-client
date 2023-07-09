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
import Header from "../../../../components/Header";
import MiniHeader from "../../../../components/MiniHeader";
import HiddenInput from "./hiddenInput";
import { ScrollView } from "react-native-gesture-handler";
import AddSteps from "./steps";
const AddRecipe = (props: any) => {
  const [name, changename] = React.useState("");
  const [description, changeDescription] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

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
            openSteps={setModalVisible}
          />

          <Button
            title={"Add"}
            onPress={() => console.log(name, description)}
          />
          <AddSteps
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
    height: "100%",
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
export default AddRecipe;
