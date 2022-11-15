import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Item from "./Item";
import TypeItem from "./TypeItem";

import im1 from "../Image/im1.jpg";
const NUM_COLUMN = 2;

export default HomePage = function ({ props }) {
  const [newValue, setNewValue] = useState("");
  const [id, setId] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 2,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 3,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 4,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 5,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 6,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 7,
      url: im1,
      text: "Coffe",
      price: 25,
    },
    {
      id: 8,
      url: im1,
      text: "Coffe",
      price: 25,
    },
  ]);

  const [typeData, setTypeData] = useState([
    {
      id: 1,
      text: "Coffe1",
    },
    {
      id: 2,
      text: "Coffe2",
    },
    {
      id: 3,
      text: "Coffe3",
    },
    {
      id: 4,
      text: "Coffe4",
    },
  ]);

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={{ flex: 1 }}>
          {/* quangcao */}
          <View
            style={{ backgroundColor: "red", height: 200, marginBottom: 10 }}
          ></View>

          {/* phan loai */}
          <View>
            <FlatList
              horizontal
              data={typeData}
              renderItem={(data) => <TypeItem item={data.item}></TypeItem>}
            ></FlatList>
          </View>

          {/*  */}
          <View style={{ backgroundColor: "yellow", width: "100%" }}>
            {/* flatlist */}
            <FlatList
              numColumns={NUM_COLUMN}
              data={data}
              renderItem={({ item }) => <Item item={item}></Item>}
            ></FlatList>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  textInput: {
    marginRight: 10,
    height: 50,
    width: 300,
    marginLeft: 10,
    borderWidth: 2,
  },

  header: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  footer: {
    flexDirection: "row",
    borderWidthTop: 2,
    alignItems: "center",
  },
});
