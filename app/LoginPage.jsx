import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";  // expo-router에서 Link 임포트
import LogoSvg from "../assets/images/svg";  // LogoSvg 컴포넌트 임포트

export default function LoginPage() {
  return (
    <View style={styles.container}>
      {/* Centered Image */}
      <LogoSvg width="200" height="200" style={styles.logo} />
      {/* Kakao Login Button */}
      <Link href="/MainPage">  {/* Link로 네비게이션 */}
        <TouchableOpacity style={styles.kakaoButton}>
          <Text style={styles.kakaoButtonText}>카카오톡으로 5초만에 시작하기</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background color
    padding: 20,
  },
  logo: {
    marginTop: 100,
    marginBottom: 40,
  },
  kakaoButton: {
    backgroundColor: "#FEE500", // Kakao yellow color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  kakaoButtonText: {
    color: "#3C1E1E", // Kakao dark brown text color
    fontSize: 16,
    fontWeight: "",
  },
});
