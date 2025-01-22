import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chatting = () => {
  return (
    <View style={styles.container}>
      <Text>Chatting Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chatting;
