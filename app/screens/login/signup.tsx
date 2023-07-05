import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import fetchData from "../../../components/restService/restApi";
import * as Linking from "expo-linking";
import { SafeAreaView } from "react-native-safe-area-context";

// Usage:

const SignUp = ({ navigation }: any) => {
  // const params = route.route.params.type;
  // console.log(params);
  Linking.createURL("signup");
  async function openBrowser(url: any) {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Opening the URL in browser is not supported");
    }
  }
  const [email, changeEmail] = React.useState("janedoe@gmail.com");
  const [password, changePassword] = React.useState("****************");
  const [username, changeUsername] = React.useState("");
  async function createAccount(url: string, oAuth: boolean) {
    if (oAuth) {
      openBrowser(url);
    } else {
      const user = { email, username, password };
      console.log(user);
      await fetchData("url", "POST", user);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <Icon
          onPress={() => navigation.navigate("screens/login/login")}
          name="chevron-left"
          size={25}></Icon>
        <Text
          onPress={() => navigation.navigate("screens/login/login")}
          style={styles.backText}>
          Back
        </Text>
      </View>
      <Text style={styles.title} className="text-red-500">
        Create an account
      </Text>
      <Text style={styles.subtitle}>Sign up today </Text>
      <View style={styles.inputs}>
        <View style={styles.searchSection}>
          <Icon name="mail" style={styles.searchIcon} size={25} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={changeEmail}
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.searchSection}>
          <Icon name="mail" style={styles.searchIcon} size={25} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={changeUsername}
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.searchSection}>
          <Icon name="lock" style={styles.searchIcon} size={25} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={changePassword}
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          createAccount("", false);
        }}
        style={styles.loginButton}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "300",
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.line}></View>
        <Text>Sign up with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            createAccount("https://127.0.0.1:8080/auth/facebook", true);
          }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://www.facebook.com/images/fb_icon_325x325.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAccount("https://127.0.0.1:8080/auth/google", true);
          }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAccount("https://127.0.0.1:8080/auth/discord", true);
          }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico",
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 36,
    height: 36,
    marginHorizontal: 15,

    marginTop: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: "auto",
    alignItems: "center",
    marginTop: "5%",
  },
  back: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: "auto",
    alignItems: "center",

    padding: "1%",
    position: "relative",
    left: "%",
  },
  line: {
    height: "2%",
    width: "30%",
    padding: "0.1%",
    margin: "1%",

    backgroundColor: "#000",
  },
  backText: {
    fontSize: 15,
    position: "relative",
    left: -5,
  },
  signMain: {
    fontWeight: "200",
    position: "absolute",
    bottom: "10%",
  },
  loginButton: {
    color: "#fff",
    backgroundColor: "#000c",
    fontSize: 24,
    padding: "3%",
    width: "35%",
    borderColor: "#000",
    marginLeft: "auto",
    borderWidth: 1,
    borderRadius: 3,
    marginRight: "5%",
    textAlign: "center",
    position: "relative",
    top: "-8%",
    fontWeight: "700",
  },
  inputs: {
    flexDirection: "column",
    width: "92%",
    height: "50%",
    position: "relative",

    top: "8%",
  },
  searchSection: {
    flexDirection: "row",
    marginTop: "5%",
    borderRadius: 3,
    shadowColor: "#ccc",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: "1%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
    color: "#000",
  },
  input: {
    height: "80%",
    backgroundColor: "#fff",
    color: "#424242",
    width: "80%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: "8%",
    backgroundColor: "#f5f5f5",
  },
  title: {
    top: "7%",
    position: "relative",
    marginLeft: "3%",
    marginRight: "auto",
    fontSize: 40,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    position: "relative",
    top: "7%",
    marginTop: "1%",
    marginLeft: "4.5%",
    marginRight: "auto",
    fontSize: 20,
    fontWeight: "200",
    color: "#000",
  },
  separator: {
    marginVertical: 30,
    marginLeft: "4%",
    marginRight: "auto",
    height: 1,
    width: "80%",
  },
});
export default SignUp;
