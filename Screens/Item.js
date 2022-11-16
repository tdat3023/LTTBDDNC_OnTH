import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Item({ item, navigation }) {
  return (
    <View style={styles.viewOne}>
      <TouchableOpacity onPress={() => navigation.navigate("CheckOut")}>
        {/* top */}

        <View style={styles.itemTop}>
          <View style={{ flexDirection: "row-reverse" }}>
            <Ionicons name="heart-circle" size={24} color="black" />
          </View>
          <View style={styles.idItem}>
            <Image style={styles.imaAvatar} source={item.url}></Image>
          </View>
        </View>
        {/* down */}
        <View style={styles.itemDown}>
          <View style={styles.nameItem}>
            <Text style={styles.textName}>{item.text}</Text>
            <View style={styles.reviews}>
              <AntDesign name="star" size={20} color="gold" />
              <Text style={{ fontSize: 15, color: "white" }}> 5.0 </Text>
              <Text style={{ fontSize: 12, color: "white" }}>
                (25 <Text>Reviews</Text>)
              </Text>
            </View>
          </View>
          <View style={styles.costItem}>
            <Text style={styles.textCost}>$65</Text>
            <View style={styles.cart}>
              <TouchableOpacity>
                <AntDesign name="shoppingcart" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  viewOne: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flex: 1,
    height: 300,
    borderRadius: 10,
  },

  textName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  nameItem: {
    marginLeft: 13,
    width: "64%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  textCost: {
    paddingLeft: 8,
    color: "yellow",
    fontSize: 17,
  },

  itemTop: {
    flex: 2,
    borderRadius: 10,
  },

  idItem: {
    flex: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imaAvatar: {
    height: 150,
    width: 150,
  },

  btnItem: {
    borderRadius: 5,
  },

  itemDown: {
    flex: 1,
    flexDirection: "row",
  },
  reviews: {
    flexDirection: "row",
  },
  cart: {
    backgroundColor: "brown",
    height: 41,
    width: 46,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: 30,
  },
});

export default Item;
