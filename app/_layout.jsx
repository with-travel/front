import React from "react";
import { Slot } from "expo-router";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function RootLayout() {
  const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

  return (
    <View
      style={[
        styles.container
      ]}
    >
      <ExpoStatusBar
        translucent
        backgroundColor="transparent"
        style="dark"
      />
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
