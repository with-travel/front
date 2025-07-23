import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { WitMainPageLogoSvg, ArrowRightSvg, EditSquareSvg, ProfileChatSvg, ThumbsUpSvg } from "../../assets/images/svg";
import {
  heightPercentage,
  widthPercentage,
  fontPercentage,
} from "@/assets/ResponsiveSize";
import { useRouter } from "expo-router";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const tabs = ["모집한 동행", "신청한 동행", "동행 기록"];

export default function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();
  const onPressInfo = () => {
    router.push("/UserInfo/ProfileInfo");
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <WitMainPageLogoSvg style={styles.title} />
      </View>

      {/* 프로필 영역 */}
      {/* 프사 */}
      <View style={styles.profileSection}>
        <View style={styles.profileTopRow}>
          <View style={styles.imageWrapper}>
            <View style={styles.profileImage} />
          </View>
          {/* 사용자 이름, 내 정보 확인 */}
          <View style={styles.nameAndButton}>
            <Text style={styles.nickname}>익명의 고슴도치</Text>
            <TouchableOpacity onPress={onPressInfo}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.infoLink}>내 정보 확인</Text>
                <ArrowRightSvg style={styles.arrowStyle} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* 사용자 태그 */}
        <View style={styles.tagContainer}>
          {["계획파", "리더형", "여유", "맛집 사냥꾼", "포토그래퍼", "힐링타임"].map((tag, idx) => (
            <View key={idx} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        {/* 자소서, 후기 */}
        <View style={styles.sectionLinkWrapper}>
          <TouchableOpacity style={styles.sectionLinkButton}>
            <Text style={styles.sectionLinkText}>자기소개서</Text>
            <ArrowRightSvg style={styles.sectionArrowStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionLinkButton}>
            <Text style={styles.sectionLinkText}>동행후기</Text>
            <ArrowRightSvg style={styles.sectionArrowStyle} />
          </TouchableOpacity>
        </View>
        {/* 버튼들 */}
        <View style={styles.actionButtonWrapper}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconWrapper}>
              <EditSquareSvg style={styles.actionIcon} />
            </View>
            <Text style={styles.actionText}>작성한 글</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconWrapper}>
              <ProfileChatSvg style={styles.actionIcon} />
            </View>
            <Text style={styles.actionText}>작성한 댓글</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconWrapper}>
              <ThumbsUpSvg style={styles.actionIcon} />
            </View>
            <Text style={styles.actionText}>좋아요 누른 글</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 하단 콘텐츠 영역 */}
      <View style={styles.bottomSheet}>
        {/* 탭 헤더 */}
        <View style={styles.tabHeader}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={() => setSelectedTab(index)}
            >
              <View style={styles.tabInner}>
                <Text
                  style={[styles.tabText, selectedTab === index && styles.activeTabText]}
                >
                  {tab}
                </Text>
                {selectedTab === index && <View style={styles.activeBar} />}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* 탭에 따른 컨텐츠 */}
        <ScrollView contentContainerStyle={styles.tabContent}>
          <Text style={styles.placeholderText}>현재 탭: {tabs[selectedTab]}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
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
  profileSection: {
    backgroundColor: "#359D66",
    paddingHorizontal: widthPercentage(16),
    paddingTop: heightPercentage(30),
    paddingBottom: heightPercentage(15),
    height: "41%",
  },
  profileTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  imageWrapper: {
    width: widthPercentage(64),
    height: widthPercentage(64),
    borderRadius: widthPercentage(32),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "90%",
    height: "90%",
    borderRadius: widthPercentage(32),
    backgroundColor: "#FFFFFF",
  },
  nameAndButton: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
  },
  nickname: {
    fontSize: fontPercentage(20),
    fontFamily: "PretendardBold",
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  infoLink: {
    fontSize: fontPercentage(16),
    color: "#F5F5F5",
  },
  arrowStyle: {
    marginTop: heightPercentage(2),
    width: widthPercentage(15),
    height: heightPercentage(15),
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: fontPercentage(10),
    color: "#359D66",
    fontWeight: "600",
  },

  sectionLinkWrapper: {
    marginTop: heightPercentage(12),
    gap: heightPercentage(10),
  },
  // 자소서, 후기 
  sectionLinkButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: heightPercentage(0),
  },
  sectionLinkText: {
    fontSize: fontPercentage(14),
    color: "#FFFFFF",
    fontFamily: "PretendardBold",
  },
  sectionArrowStyle: {
    width: widthPercentage(12),
    height: heightPercentage(12),
  },
  // 자소서, 후기 

  // 버튼
  actionButtonWrapper: {
    marginTop: heightPercentage(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionButton: {
    width: widthPercentage(111),
    height: heightPercentage(52),
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },

  iconWrapper: {
    marginBottom: heightPercentage(4),
  },

  actionIcon: {
    width: widthPercentage(18),
    height: heightPercentage(18),
  },

  actionText: {
    fontSize: fontPercentage(10),
    color: "#359D66",
    fontFamily: "PretendardBold",
    fontWeight: "bold"
  },
  // 버튼



  bottomSheet: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    overflow: "hidden",
  },
  tabHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: heightPercentage(15),
    backgroundColor: "#fff",
  },
  tabButton: {
    width: widthPercentage(100),
    alignItems: "center",
  },
  tabInner: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: fontPercentage(14),
    color: "#747474",
    padding: heightPercentage(5),
  },
  activeTabText: {
    color: "#343434",
    fontWeight: "bold",
  },
  activeBar: {
    marginTop: 4,
    width: "150%",
    height: 3,
    backgroundColor: "#359D66",
  },
  tabContent: {
    padding: widthPercentage(15),
  },
  placeholderText: {
    fontSize: fontPercentage(14),
    color: "#333",
    fontWeight: "bold",
  },
});
