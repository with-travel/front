import { Tabs } from 'expo-router';
import { View, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { widthPercentage, heightPercentage, fontPercentage } from "../../assets/ResponsiveSize";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HomeSvg,CommunitySvg,CreateSvg,ChattingSvg,ProfileSvg } from "../../assets/images/svg";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function TabLayout() {
  return (
    <>
      <ExpoStatusBar
        translucent
        backgroundColor="#fff"
        style="dark"
      />
      <Tabs
        screenOptions={{
          statusBarStyle: "dark",
          statusBarTranslucent: true,
          headerShown: false,
          tabBarStyle: {
            height: heightPercentage(57),
            justifyContent: 'center',
            alignContent:'center',
            borderTopColor: 'black',
            borderTopWidth: 1,
            position: 'absolute',
          },
          tabBarIconStyle: { marginTop: heightPercentage(10) },
          tabBarLabelStyle: {
            fontSize: heightPercentage(13),
            fontFamily: 'Pretendard',
            color: 'black',
            marginTop: heightPercentage(5),
          },
          tabBarShowLabel: false,
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
        }}
      >
        <Tabs.Screen
          name="MainPage"
          options={{
            title: '메인',
            tabBarIcon: ({ focused }) => (
              <HomeSvg style={styles.homeIconButton} focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="Community"
          options={{
            title: '커뮤니티',
            tabBarIcon: ({ focused }) => (
              <CommunitySvg style={styles.communityIconButton} focused={focused}/>
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          options={{
            title: '',
            tabBarIcon: () => (
              <CreateSvg style={styles.createIconButton}/>
            ),
          }}
        />
        <Tabs.Screen
          name="Chatting"
          options={{
            title: '채팅',
            tabBarIcon: ({ focused }) => (
              <ChattingSvg style={styles.chattingIconButton} focused={focused}/>

            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: '프로필',
            tabBarIcon: ({ focused }) => (
              <ProfileSvg style={styles.profileIconButton} focused={focused}/>
            ),
          }}
        />
      </Tabs></>
  );
}

const styles = StyleSheet.create({
  homeIconButton:{
    width:widthPercentage(21),
    height:heightPercentage(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  communityIconButton:{
    width:widthPercentage(28.57),
    height:heightPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  createIconButton:{
    width:widthPercentage(52),
    height:heightPercentage(52),
    justifyContent: 'center',
    alignItems: 'center',
    bottom:heightPercentage(15),
  },
  chattingIconButton:{
    width:widthPercentage(23),
    height:heightPercentage(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconButton:{
    width:widthPercentage(23),
    height:heightPercentage(23),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
