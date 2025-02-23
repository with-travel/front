import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoginSvg, KakaoSvg } from "../assets/images/svg";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [fontsLoaded] = useFonts({
    PretendardBold: require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/SignUpPage");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(215, 84, 45, 0.7)",
          "rgba(221, 101, 40, 0.7)",
          "rgba(226, 118, 35, 0.7)",
          "rgba(237, 151, 24, 0.7)",
          "rgba(191, 153, 44, 0.7)",
          "rgba(145, 154, 63, 0.7)",
          "rgba(53, 157, 102, 0.7)",
          "rgba(42, 143, 143, 0.8)",
          "rgba(31, 128, 184, 0.9)",
        ]}
        style={styles.gradientBackground}
      />

      <View style={styles.content}>
        <LoginSvg style={styles.logo} />
        <Text style={styles.mainText}>위트와 함께{"\n"}여행할 준비가 되셨나요?</Text>
        <TouchableOpacity style={styles.kakaoButton} onPress={handleNavigation}>
          <KakaoSvg style={styles.kakaoIcon} />
          <Text style={styles.kakaoButtonText}>
            <Text style={{ fontFamily: "PretendardBold"}}>
              카카오톡
            </Text>으로 시작하기
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  logo: {
    position: "absolute",
    top: "10%",
    width: "120%",
    height: "60%",
  },
  mainText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "left",
    top: "-15%",
    width: "90%",
    lineHeight: 30,
  },
  kakaoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD761",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: "90%",
  },
  kakaoIcon: {
    width: 24,
    height: 24,
  },
  kakaoButtonText: {
    fontFamily: "PretendardReg",
    fontSize: 17,
    color: "#000000",
    marginLeft: "10%",
  },  
});
