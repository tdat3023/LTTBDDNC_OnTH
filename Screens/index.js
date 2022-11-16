import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import Wellcome from "./Wellcome";
import CheckOut from "./CheckOut";

const Stack = createNativeStackNavigator();
export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CheckOut"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
