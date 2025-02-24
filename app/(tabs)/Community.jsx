import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,Platform,StatusBar } from "react-native";
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function Community() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>프랑스 ▼</Text>
        <TouchableOpacity>
          <Text style={styles.closeButton}>✖</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="검색어를 입력하세요" />
      </View>

      {/* Top Posts Section */}
      <Text style={styles.sectionTitle}>좋아요 상위 2개 게시글</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>익명의 고슴도치</Text>
        <Text style={styles.cardTime}>7시간 전</Text>
        <Text style={styles.cardContent}>샤포로 어쩌고... 저쩌고...</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardStats}>👀 17 👍 17</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>익명의 고슴도치</Text>
        <Text style={styles.cardTime}>7시간 전</Text>
        <Text style={styles.cardContent}>도쿄 찐 맛집 추천합니다... 자세한 내용은 .......</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardStats}>👀 17 👍 17</Text>
        </View>
      </View>

      {/* Latest Posts Section */}
      <Text style={styles.sectionTitle}>최신순 정렬</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>익명의 고슴도치</Text>
        <Text style={styles.cardTime}>7시간 전</Text>
        <Text style={styles.cardContent}>샤포로 어쩌고... 저쩌고...</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardStats}>👀 17 👍 17</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>익명의 고슴도치</Text>
        <Text style={styles.cardTime}>7시간 전</Text>
        <Text style={styles.cardContent}>도쿄 찐 맛집 추천합니다... 자세한 내용은 .......</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardStats}>👀 17 👍 17</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,    marginTop:statusBarHeight,

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 16,
    color: "#555",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardTime: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardStats: {
    fontSize: 12,
    color: "#555",
  },
});
