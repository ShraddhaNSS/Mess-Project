// app/BookingConfirmation.tsx
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

type BookingRouteParam = {
  BookingConfirmation: {
    mess: {
      name: string;
      location: string;
      price: string;
      rating: string;
      image: any;
      description: string;
    };
  };
};

export default function BookingConfirmation() {
  const route = useRoute<RouteProp<BookingRouteParam, 'BookingConfirmation'>>();
  const navigation = useNavigation();
  const { mess } = route.params;

  return (
    <View style={styles.container}>
      <Image source={mess.image} style={styles.image} />
      <Text style={styles.name}>{mess.name}</Text>
      <Text style={styles.description}>{mess.description}</Text>
      <Text style={styles.details}>📍 location{mess.location}</Text>
      <Text style={styles.details}>💰 prices{mess.price}</Text>
      <Text style={styles.details}>⭐ rate our mess{mess.rating}</Text>

      <Button title="Confirm Booking" onPress={() => alert(`${mess.name} booked successfully!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, marginBottom: 10 },
  details: { fontSize: 14, marginBottom: 5 },
});
