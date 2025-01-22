import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // 로그아웃 처리 후 로그인 페이지로 이동
    navigation.navigate('index');
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Log Out" onPress={handleLogout} />
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

export default Profile;
