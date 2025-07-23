import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ExpoStatusBar translucent backgroundColor="transparent" style="dark" />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
});
