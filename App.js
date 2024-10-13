import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const products = [
  { id: '1', name: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Devang', image: require('./assets/ca-nau-lau.png') },
  { id: '2', name: '1KG KHÔ GÀ BƠ TỎI...', shop: 'Shop LTD Food', image: require('./assets/ga_bo_toi.png') },
  { id: '3', name: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi', image: require('./assets/do_choi_dang_mo_hinh.png') },
  { id: '4', name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', image: require('./assets/do_choi_dang_mo_hinh.png') },
  { id: '5', name: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', image: require('./assets/lanh_dao_gian_don.png') },
  { id: '6', name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', image: require('./assets/hieu_long_con_tre.png') },
];

const ProductItem = ({ item }) => (
  <View style={styles.productItem}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Text style={styles.cartButton}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.messageText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E90FF',
  },
  backButton: {
    fontSize: 24,
    color: 'white',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cartButton: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  messageText: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  productItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});