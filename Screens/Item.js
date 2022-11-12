import React, { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

function Item({ item }) {
  return (
    <View style={styles.viewOne}>
      <View style={styles.itemBox}>
        <View style={styles.idItem}>
          <Image style={styles.imaAvatar} source={item.url}></Image>
        </View>
        <View style={styles.nameItem}>
          <Text style={styles.textName}>{item.text}</Text>
          <Text>250</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewOne: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    borderRadius: 10,
  },

  textName: {
    fontSize: 15,
    fontWeight: "bold",
  },

  itemBox: {
    height: 250,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "space-around",
  },

  idItem: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imaAvatar: {
    height: 70,
    width: 70,
  },

  nameItem: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },

  btnItem: {
    backgroundColor: "green",
    width: 80,
    borderRadius: 5,
  },
});

export default Item;
