// app/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../auth/auth';

export default function Home() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Mess Booking App</Text>
        <Text style={styles.subtitle}>Hello, {user.name}!</Text>
        
        <TouchableOpacity 
          style={styles.button}>
        
          <Text style={styles.buttonText} onPress={() => router.push('../MessList')}
          >View Veg Mess List</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}>
        
          <Text style={styles.buttonText} onPress={() => router.push('../non-veg')}
          >View Non-Veg Mess List</Text>
        </TouchableOpacity>
      
        
        <TouchableOpacity 
          style={[styles.button, styles.signOutButton]} 
          onPress={signOut}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mess Booking App</Text>
      <Text style={styles.subtitle}>Find and book your favorite mess</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/signin')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]} 
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});