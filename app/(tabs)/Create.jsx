import React from 'react';
import { View, Text, StyleSheet,Platform,StatusBar } from 'react-native';
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const Create = () => {
  return (
    <View style={styles.container}>
      <Text>Create Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    marginTop:statusBarHeight,

  },
});

export default Create;
