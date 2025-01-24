import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs} from 'expo-router';
import { useFonts } from 'expo-font';
import {View, StyleSheet} from 'react-native';

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {height: 86,justifyContent:"center",borderTopColor:"black",borderTopWidth:1,paddingHorizontal:10,},
      tabBarIconStyle: {marginTop:15},
      tabBarLabelStyle: { fontSize: 13, fontFamily: "Pretendard", color: "black", marginTop:15},
    }}
    >
      <Tabs.Screen
        name="MainPage"
        options={{
          title: '메인',
          tabBarIcon: ({ focused }) => <View style ={[styles.iconContainer,{backgroundColor:focused?"#5B5B5B":"#D9D9D9"},]}/>
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ focused }) => <View style ={[styles.iconContainer,{backgroundColor:focused?"#5B5B5B":"#D9D9D9"},]}/>
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: '+',
          tabBarIcon: ({ focused }) => <View style ={[styles.iconContainer,{backgroundColor:focused?"#5B5B5B":"#D9D9D9"},]}/>
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ focused }) => <View style ={[styles.iconContainer,{backgroundColor:focused?"#5B5B5B":"#D9D9D9"},]}/>
        }}
      />
      <Tabs.Screen
        name="Chatting"
        options={{
          title: '채팅',
          tabBarIcon: ({ focused }) => <View style ={[styles.iconContainer,{backgroundColor:focused?"#5B5B5B":"#D9D9D9"},]}/>
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height:50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center',
  },
});