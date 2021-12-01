import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceDetail from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceDetail,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
