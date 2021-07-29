import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    initialRouteName="Listing"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Listing" component={ListingDetailsScreen} />
    <Stack.Screen
      name="ViewImage"
      component={ViewImageScreen}
      options={({ route }) => ({
        title: route.params.title,
      })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;