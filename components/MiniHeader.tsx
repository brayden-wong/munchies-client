import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import * as Icons from "react-native-heroicons/mini";

const MiniHeader = (props: any) => {
  const isOpen = props.isOpen;
  const rotationValue = new Animated.Value(isOpen ? 180 : 0);

  const handlePress = () => {
    props.setIsOpen(!isOpen);
    Animated.timing(rotationValue, {
      toValue: isOpen ? 0 : 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    // Code to run when the component mounts
    if (isOpen === false) {
      handlePress();
    } else {
      handlePress();
    }
    // Return a cleanup function if needed
    return () => {
      // Code to run when the component unmounts or before it re-renders
    };
  }, []); // The empty dependency array means the effect runs only once, on component mount

  const rotateStyle = {
    transform: [
      {
        rotate: rotationValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
      <TouchableOpacity style={styles.closeIcon} onPress={handlePress}>
        <Animated.View style={rotateStyle}>
          <Icons.ChevronDownIcon color={"#0b0b0b"} size={40} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    marginLeft: "auto",
  },
  headerContainer: {
    backgroundColor: "#ccc",
    height: 50,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#0b0b0b",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default MiniHeader;
