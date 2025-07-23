import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function MyInfoPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 상단 뒤로가기 버튼 */}
      <TouchableOpacity onPress={() => router.replace("/(tabs)/Profile")} style={styles.backButton}>
        <Text style={styles.backText}>← 뒤로</Text>
      </TouchableOpacity>

      {/* 본문 */}
      <View style={styles.content}>
        <Text style={styles.infoText}>내 정보 페이지</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "#2e9b62",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
