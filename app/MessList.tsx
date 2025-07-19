// app/messList.tsx
import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../auth/auth';

const messData = [
  {
    id: '1',
    name: 'Golden Spoon Mess',
    location: 'Near Sinhgad Campus Gate 1',
    price: '₹150/day',
    rating: '4.5',
    image: require('../assets/images/mess1.webp'),
    description: 'Delicious home-style cooking with fresh ingredients',
  },
  {
    id: '2',
    name: 'Annapurna Mess',
    location: 'Nahre Main Market Road',
    price: '₹120/day',
    rating: '4.2',
    image: require('../assets/images/mess2.webp'),
    description: 'Authentic regional cuisine at affordable prices',
  },
  {
    id: '3',
    name: 'Shree Krishna Mess',
    location: 'Ambegao Pathar College Street',
    price: '₹180/day',
    rating: '4.7',
    image: require('../assets/images/mess3.webp'),
    description: 'Premium quality meals with variety of options',
  }, 
  {
    id: '4',
    name: 'Maharaja Mess',
    location: 'SPPU University Area',
    price: '₹160/day',
    rating: '4.3',
    image: require('../assets/images/mess4.webp'),
    description: 'Royal taste experience with traditional recipes',
  },
];

export default function MessList() {
  const { user } = useAuth();

  const handleBookMess = (messName: string) => {
    Alert.alert(
      'Booking Confirmation',
      `Do you want to book ${messName}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Book Now', 
          onPress: () => Alert.alert('Success', `${messName} booked successfully!`) 
        },
      ]
    );
  };

  const renderMessItem = ({ item }: { item: any }) => (
    <View style={styles.messCard}>
      <Image source={item.image} style={styles.messImage} />
      <View style={styles.messInfo}>
        <Text style={styles.messName}>{item.name}</Text>
        <Text style={styles.messLocation}>{item.location}</Text>
        <Text style={styles.messDescription}>{item.description}</Text>
        <View style={styles.messDetails}>
          <Text style={styles.messPrice}>{item.price}</Text>
          <Text style={styles.messRating}>⭐ {item.rating}</Text>
        </View>
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => handleBookMess(item.name)}
        >
          <Text style={styles.bookButtonText} >Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Mess Options</Text>
      <Text style={styles.welcomeText}>Welcome back, {user?.name}!</Text>
      
      <FlatList
        data={messData}
        renderItem={renderMessItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  messCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  messImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  messInfo: {
    padding: 15,
  },
  messName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  messLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  messDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 18,
  },
  messDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  messPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  messRating: {
    fontSize: 14,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});