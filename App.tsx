import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { theme } from "./src/global/styles/themes";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
        hidden={false}
      />
      <Routes />
    </QueryClientProvider>
  );
}
