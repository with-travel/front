import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const Chatting = () => {
  const chatList = [
    { id: '1', name: '익명의 고슴도치', message: '어디서 만날까요 .....', time: '오후 8:34' },
    { id: '2', name: '익명의 고슴도치', message: '어디서 만날까요 .....', time: '오후 8:34' },
    { id: '3', name: '익명의 고슴도치', message: '어디서 만날까요 .....', time: '오후 8:34' },
  ];

  const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
      <View style={styles.avatar} />
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>내 채팅 목록</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>

      {/* 필터 버튼 */}
      <View style={styles.filters}>
        {['전체', '1:1', '단체', '요청'].map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,
              filter === '전체' && styles.activeFilter, // '전체' 버튼 활성화
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === '전체' && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 채팅 목록 */}
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        style={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#f9f9f9',
  },
  activeFilter: {
    backgroundColor: '#000',
  },
  filterText: {
    fontSize: 14,
    color: '#555',
  },
  activeFilterText: {
    color: '#fff',
  },
  chatList: {
    paddingHorizontal: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  chatContent: {
    flex: 1,
    marginLeft: 16,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
});

export default Chatting;
