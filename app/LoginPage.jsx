import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useFonts } from 'expo-font';
import LogoSvg from "../assets/images/svg";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/MainPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>여행의 설렘을 함께</Text>
      {/* Centered Image */}
      <LogoSvg width="200" height="200" style={styles.logo} />
      {/* Kakao Login Button */}
      <TouchableOpacity style={styles.kakaoButton} onPress={handleNavigation}>
        <Text style={styles.kakaoButtonText}>카카오톡으로 5초만에 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop:70,
  },
  logoText: {
    fontSize: 28,
    fontFamily: "Pretendard",
    fontWeight:"bold",
  },
  logo: {
    marginTop:0,
    marginBottom: 0,
  },
  kakaoButton: {
    marginTop:100,
    backgroundColor: "#FEE500",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    justifyContent:"center",
  },
  kakaoButtonText: {
    color: "#3C1E1E",
    fontSize: 17,
    fontFamily:"Pretendard",
    fontWeight: "bold",
  },
});
