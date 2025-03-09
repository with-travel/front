import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LoginSvg, KakaoSvg } from "../assets/images/svg";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { widthPercentage, heightPercentage, fontPercentage } from "../assets/ResponsiveSize";

export default function LoginPage() {
  const [fontsLoaded] = useFonts({
    PretendardBold: require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/SignUpPage");
  };
  const handleNavigation1 = () => {
    router.push("/SurveyPage");
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
      <TouchableOpacity style={styles.mpbutton} onPress={handleNavigation1}>
        <Text style={styles.kakaoButtonText}>Shortcut</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <LoginSvg style={styles.logo} />
        <Text style={styles.mainText}>위트와 함께{"\n"}여행할 준비가 되셨나요?</Text>
        <TouchableOpacity style={styles.kakaoButton} onPress={handleNavigation}>
          <KakaoSvg style={styles.kakaoIcon} />
          <Text style={styles.kakaoButtonText}>
            {/*lineHeight 안쓰면 텍스트 "시작하기" 부분이 잘림 */}
            <Text style={{ fontFamily: "PretendardBold",  }}includeFontPadding={false}>카카오톡</Text>
            으로 시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mpbutton: {
    position: "absolute",
    bottom: heightPercentage(10),
    center: widthPercentage(50),
  },
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
    paddingBottom: heightPercentage(50),
  },
  logo: {
    position: "absolute",
    top: heightPercentage(100),
    width: widthPercentage(477),
    height: heightPercentage(349),
  },
  mainText: {
    fontSize: fontPercentage(30),
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "left",
    top: heightPercentage(-120),
    width: "90%",
    lineHeight: fontPercentage(40),
  },
  kakaoButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#FFD761",
    borderRadius: 5,
    width: widthPercentage(339),
    height: heightPercentage(65),
    bottom:heightPercentage(50),
  },
  kakaoIcon: {
    width: widthPercentage(24),
    height: heightPercentage(24),
    justifyContent:"center",
  },
  kakaoButtonText: {
    textAlign:"center",
    fontFamily: "PretendardReg",
    fontSize: fontPercentage(17),
    color: "#000000",
    marginLeft: widthPercentage(9),
  },
});
