import React, { useState, useRef } from "react";
import * as Icons from "react-native-heroicons/mini";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import MiniHeader from "../../../../../components/MiniHeader";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
const HiddenInput = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  let height = useRef(new Animated.Value(0)).current;

  const topPosition = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const toggleInput = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      Animated.timing(topPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        delay: 300,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(height, {
        toValue: 50,
        delay: 300,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(topPosition, {
        toValue: -40,
        delay: 400,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(height, {
        toValue: 0,

        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleInputChange = (text: string) => {
    props.setValue(text); // Pass the input value to the prop function
  };
  const [isFirst, setIsFirst] = useState(false);
  if (props.title === "Name" && isFirst === false) {
    toggleInput();
    setIsFirst(true);
  }
  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleInput}>
        <MiniHeader isOpen={isOpen} title={props.title} setIsOpen={setIsOpen} />
      </TouchableOpacity>
      <Animated.View
        style={{ top: topPosition, height: height, opacity: opacity }}>
        {props.title !== "Steps" && props.title !== "Ingredients" ? (
          <TextInput
            style={styles.input}
            value={props.value}
            onChangeText={handleInputChange}
            autoFocus={true}
            multiline={
              isOpen === true && props.multiline === true ? true : false
            }
            numberOfLines={isOpen === true && props.multiline === true ? 4 : 1}
          />
        ) : (
          <View style={styles.listItems}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => props.openSteps(true)}>
              <Icons.PlusCircleIcon style={styles.icon} color={"#0b0b0b"} />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  listItems: {
    height: "100%",
    backgroundColor: "#fff",
    color: "#424242",
    width: "99.8%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10, // Use a single borderRadius property to simplify the code
    borderBottomLeftRadius: 10,
    textAlign: "center",
  },
  input: {
    height: "100%",
    backgroundColor: "#fff",
    color: "#424242",
    width: "99.8%",
    zIndex: 1,
    borderBottomRightRadius: 10, // Use a single borderRadius property to simplify the code
    borderBottomLeftRadius: 10,
    textAlign: "center",
  },
  header: {
    zIndex: 3,
  },
  iconButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
    zIndex: 1,
    marginTop: "auto",
  },
  icon: {
    position: "relative",
    top: "0%",
  },
});

export default HiddenInput;
