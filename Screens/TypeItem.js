import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  RefreshControl,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TypeItem({ item }) {
  return (
    <View style={styles.viewOne}>
      <Text style={styles.textName}>{item?.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  viewOne: {
    backgroundColor: "blue",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
  },

  textName: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default TypeItem;
