import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/mini";
export default function Navigation(props: any) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={props.selected == 0 ? styles.icon : styles.icons}
        onPress={() => props.setSelected(0)}>
        <Icons.HomeIcon
          size={32}
          color={props.selected == 0 ? `#000` : `#828383`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={props.selected == 1 ? styles.icon : styles.icons}
        onPress={() => props.setSelected(1)}>
        <Icons.MagnifyingGlassIcon
          size={32}
          color={props.selected == 1 ? `#000` : `#828383`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={props.selected == 2 ? styles.icon : styles.icons}
        onPress={() => props.setSelected(2)}>
        <Icons.BookOpenIcon
          size={32}
          color={props.selected == 2 ? `#000` : `#828383`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={props.selected == 3 ? styles.icon : styles.icons}
        onPress={() => props.setSelected(3)}>
        <Icons.ChatBubbleOvalLeftEllipsisIcon
          size={32}
          color={props.selected == 3 ? `#000` : `#828383`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={props.selected == 4 ? styles.icon : styles.icons}
        onPress={() => props.setSelected(4)}>
        <Icons.UserIcon
          size={32}
          color={props.selected == 4 ? `#000` : `#828383`}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: "6%",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    alignSelf: "center",
    position: "absolute",
    bottom: "1.5%",
    width: "96%",
  },
  icon: {
    borderRadius: 5,
    backgroundColor: "#dbdbdb",
    padding: 2,
  },
  icons: {
    padding: 2,
  },
});
