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
} from "react-native";

function TypeItem({ item }) {
  return (
    <TouchableOpacity style={styles.viewOne}>
      <Text style={styles.textName}>{item?.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  viewOne: {
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
  },

  textName: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default TypeItem;
