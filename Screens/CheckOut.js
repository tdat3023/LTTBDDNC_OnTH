import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import React from "react";
import im1 from "../Image/im1.jpg";

export default function CheckOut() {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}> Checkout </Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="message-badge-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>

        {/* body */}
        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.product}>
              <Image style={styles.imaProduct} source={im1}></Image>

              <View style={styles.info}>
                <Text> StarBucks Hot Coffe </Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <AntDesign name="star" size={20} color="gold" />
                  <Text style={{ fontSize: 15, color: "white" }}>
                    5.0
                    <Text style={{ fontSize: 12, color: "white" }}>
                      (25 <Text>Reviews</Text>)
                    </Text>{" "}
                  </Text>
                </View>
                <Text style={{ marginTop: 5, fontSize: 20, color: "yellow" }}>
                  $65
                </Text>
              </View>

              <View style={styles.amount}>
                <TouchableOpacity>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>2</Text>
                <TouchableOpacity>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.product}>
              <Image style={styles.imaProduct} source={im1}></Image>

              <View style={styles.info}>
                <Text> StarBucks Hot Coffe </Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <AntDesign name="star" size={20} color="gold" />
                  <Text style={{ fontSize: 15, color: "white" }}>
                    5.0
                    <Text style={{ fontSize: 12, color: "white" }}>
                      (25 <Text>Reviews</Text>)
                    </Text>{" "}
                  </Text>
                </View>
                <Text style={{ marginTop: 5, fontSize: 20, color: "yellow" }}>
                  $65
                </Text>
              </View>

              <View style={styles.amount}>
                <TouchableOpacity>
                  <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text>2</Text>
                <TouchableOpacity>
                  <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.itemDown}>
              <Text style={styles.text1}>Special Request To Us</Text>
              <View style={styles.input}>
                <MaterialCommunityIcons
                  style={{ marginTop: 10, marginLeft: 10 }}
                  name="comment-plus-outline"
                  size={24}
                  color="black"
                />
                <Text style={{ marginTop: 10, marginLeft: 10 }}>
                  Add your note here ...
                </Text>
              </View>
              <View style={styles.discount}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 24 }}>Apply Promo Code</Text>
                  <Text>Use promo code for discount</Text>
                </View>
                <View style={styles.codeDiscount}></View>
              </View>
            </View>
          </View>
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <View>
            <Text></Text>
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
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  body: {
    flex: 1,

    marginTop: 10,
  },
  footer: {
    backgroundColor: "green",
  },

  item: {
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 10,
  },
  product: {
    height: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "brown",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  imaProduct: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text1: {
    justifyContent: "flex-start",
    marginVertical: 10,
    fontSize: 20,
  },
  amount: {
    height: "100%",
    width: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },

  itemDown: {
    width: "90%",
  },
  input: {
    height: 100,
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
  },
  discount: {
    marginTop: 10,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  codeDiscount: {
    height: 50,
    marginLeft: 10,
    backgroundColor: "yellow",
    width: 145,
    borderRadius: 10,
  },
});
