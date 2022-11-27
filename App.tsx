import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#7159c1"}
        hidden={false}
      />
      <Routes />
    </>
  );
}
