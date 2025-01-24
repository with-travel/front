import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  const handleLogout = () => {
    // 로그아웃 처리 후 로그인 페이지로 이동
    router.push('/'); // 로그인 페이지로 이동
  };

  return (
    <ScrollView style={styles.container}>
      {/* 프로필 정보 */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>익명의 고슴도치</Text>
          <Text style={styles.ageGender}>20대 남자</Text>
        </View>
      </View>

      {/* 태그 */}
      <View style={styles.tags}>
        {['계획파', '리더형', '여유', '맛집 사냥꾼', '포토그래퍼', '힐링타임'].map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewText}>동행 후기</Text>
        </TouchableOpacity>
      </View>

      {/* 자기소개 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>자기소개서</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>자기소개서 수정하기</Text>
        </TouchableOpacity>
        <View style={styles.introductionBox} />
      </View>

      {/* 탭 영역 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>모집한 동행</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>11/10 도쿄에서 저녁 드실 분 구합니다!</Text>
          <Text>현재 저 포함 4명 정도... 어쩌고... 저쩌고...</Text>
          <Text>11/10 18:00 - 도쿄, 20대, 남자, 식사</Text>
        </View>
      </View>

      {/* 커뮤니티 활동 내역 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>커뮤니티 활동내역</Text>
        <View style={styles.communityGrid}>
          {['작성한 글', '작성한 댓글', '좋아요 누른 글'].map((item, index) => (
            <View key={index} style={styles.communityCard}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 계정 정보 */}
      <View style={styles.section}>
        {['계정 정보', '서비스 이용약관', '개인정보 처리 방침', '로그아웃'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.linkItem} onPress={item === '로그아웃' ? handleLogout : null}>
            <Text style={styles.linkText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ageGender: {
    fontSize: 14,
    color: '#555',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 8,
  },
  tag: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  reviewButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: 8,
  },
  reviewText: {
    color: '#555',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  introductionBox: {
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginTop: 8,
  },
  editButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  editButtonText: {
    color: '#007BFF',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  communityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  communityCard: {
    width: '30%',
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  linkItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  linkText: {
    fontSize: 16,
  },
});

export default Profile;
