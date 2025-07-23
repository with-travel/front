import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from "react-native";
import { WitMainPageLogoSvg, ProfileLogoSvg, FolderImageBlueSvg, FolderImageOrangeSvg } from "../../assets/images/svg"; // svg
import { heightPercentage, widthPercentage, fontPercentage } from "@/assets/ResponsiveSize";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export default function MainPage() {
  const [hasPlannedTrip, setHasPlannedTrip] = useState(false); return (
    <ScrollView style={styles.container}
      contentContainerStyle={{ paddingBottom: heightPercentage(100) }}>
      {/* Header */}
      <View style={styles.header}>
        <WitMainPageLogoSvg style={styles.title} />
      </View>

      {/* Section 1: 동행 찾기 / 예정된 동행 */}
      <View
        style={[
          styles.scheduledTripBlock,
          { backgroundColor: hasPlannedTrip ? "#147FB8" : "#ED9718" },
        ]}
      >
        {hasPlannedTrip ? (
          // 예정된 동행 카드
          <View style={[styles.scheduledTripBlock, { backgroundColor: "#147FB8" }]}>
            <Text style={styles.cardTitle}>예정된 동행</Text>
            <Text style={styles.cardSubtitle}>2025년 2월 30일 ○○님과의 동행</Text>
            <TouchableOpacity
              style={styles.folderImageWrapper}
              onPress={() => setHasPlannedTrip(false)}
            >
              <FolderImageBlueSvg style={styles.folderImage} />
              <View style={styles.folderTextOverlay}>
                <Text style={styles.cardDestinationText}>후쿠오카 여행</Text>
                <Text style={styles.cardDDay}>D-123</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          // 동행 찾기 카드
          <View style={[styles.scheduledTripBlock, { backgroundColor: "#ED9718" }]}>
            <Text style={styles.cardTitle}>나와 딱 맞는 동행 찾기</Text>
            <Text style={styles.cardSubtitle}>여행 설문을 통해 동행을 추천해줄게요!</Text>
            <TouchableOpacity
              style={styles.folderImageWrapper}
              onPress={() => setHasPlannedTrip(true)}
            >
              <FolderImageOrangeSvg style={styles.folderImage} />
            </TouchableOpacity>
          </View>
        )}
      </View>



      {/* Section 2: Shorts */}
      <Text style={styles.sectionTitle}>Shorts</Text>
      <ScrollView
        horizontal
        style={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.shortsItem}>
          <Text style={styles.addIcon}>0</Text>
        </View>
        <View style={styles.shortsItem}>
          <Text style={styles.addIcon}>1</Text>
        </View>
        <View style={styles.shortsItem}>
          <Text style={styles.addIcon}>2</Text>
        </View>
        <View style={styles.shortsItem}>
          <Text style={styles.addIcon}>3</Text>
        </View>
      </ScrollView>


      {/* Section 3: 최신 여행 정보 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>○○ 최신 여행 정보</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoCard}>
        <Text>최신 커뮤니티 글</Text>
        <Text>프로필 사진, 닉네임, 작성 시간, 글 내용, 좋아요 수, 댓글 수, 조회수</Text>
      </View>
      <View style={styles.infoCard}>
        <Text>최신 커뮤니티 글</Text>
        <Text>프로필 사진, 닉네임, 작성 시간, 글 내용, 좋아요 수, 댓글 수, 조회수</Text>
      </View>

      {/* Section 4: 배너 */}
      <View style={styles.banner}>
        <Text>배너</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusBarHeight,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    width: widthPercentage(50),
    height: heightPercentage(50),
  },

  // {section 1}
  scheduledTripBlock: {
    height: heightPercentage(261),
    justifyContent: "center",
    alignContent: "center",
  },

  cardTitle: {
    textAlign: "left",
    fontFamily: "PretendardBold",
    fontSize: fontPercentage(20),
    color: "#ffffff",
    marginTop: heightPercentage(10),
    marginLeft: widthPercentage(20),
  },
  cardSubtitle: {
    textAlign: "left",
    fontFamily: "PretendardBold",
    fontSize: fontPercentage(15),
    color: "#ffffff",
    marginTop: heightPercentage(5),
    marginLeft: widthPercentage(20),
  },
  cardDestinationText: {
    textAlign: "left",
    fontFamily: "PretendardBold",
    fontSize: fontPercentage(15),
    color: "#ffffff",
    marginTop: heightPercentage(5),
    marginLeft: widthPercentage(15),
  },
  cardDDay: {
    textAlign: "left",
    fontFamily: "PretendardReg",
    fontSize: fontPercentage(48),
    color: "#ffffff",
    marginLeft: widthPercentage(9),
  },
  folderImageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: heightPercentage(139),
    width: widthPercentage(357),
    marginTop: heightPercentage(15),
    alignSelf: "center",
  },
  folderImage: {
    height: "100%",
    width: "100%",
  },
  folderTextOverlay: {
    position: "absolute",
    top: heightPercentage(20),
    left: widthPercentage(10),
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "left",
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  horizontalScrollView: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  shortsItem: {
    backgroundColor: "#e0e0e0",
    height: heightPercentage(289),
    width: widthPercentage(203), // 가로 길이
    marginRight: 8, // 아이템 간 간격
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  infoCard: {
    backgroundColor: "#f5f5f5",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  banner: {
    backgroundColor: "#f0f0f0",
    height: 100,
    marginHorizontal: 16,
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
