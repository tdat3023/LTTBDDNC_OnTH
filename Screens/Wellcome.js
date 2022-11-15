import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import coffe from "../Image/coffe.png";
import { AntDesign } from "@expo/vector-icons";
export default function Wellcome({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={coffe}
          resizeMode="stretch"
          style={styles.image}
        ></ImageBackground>
        <View style={styles.viewBtn}>
          <View style={styles.viewTitle}>
            <Text style={styles.text}>Discover</Text>
            <Text style={styles.text}>premium coffee</Text>
            <Text style={styles.text}>around you</Text>
          </View>
          <View style={styles.viewBtn1}>
            <View>
              <TouchableOpacity
                style={styles.btnStart}
                onPress={() => navigation.navigate("HomePage")}
              >
                <AntDesign name="facebook-square" size={24} color="white" />
                <Text style={styles.textbtn}>SIGN IN WITH FACEBOOK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnStart}
                onPress={() => navigation.navigate("HomePage")}
              >
                <AntDesign name="google" size={24} color="white" />
                <Text style={styles.textbtn}>SIGN IN WITH GOOGLE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBtn1}>
              <Text style={styles.text2}>Don't have on account ?</Text>
              <TouchableOpacity style={styles.btnStart1}>
                <Text style={styles.text1}>RESIGN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  viewBtn: {
    flex: 1,
    backgroundColor: "black",
  },
  btnStart: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    width: 300,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  viewTitle: {
    marginLeft: 10,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  text1: {
    color: "yellow",
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "yellow",
  },
  text2: {
    color: "white",
    marginTop: 10,
  },
  textbtn: {
    marginLeft: 10,
    color: "white",
    fontSize: 15,
    lineHeight: 60,

    textAlign: "center",
  },
  viewBtn1: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
