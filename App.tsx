import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";

import { Routes } from "./src/routes";

import AppLoading from "expo-app-loading";

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
      <StatusBar barStyle={"light-content"} backgroundColor="#350693" />
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </>
  );
}
