// app/_layout.tsx
import { Stack } from 'expo-router';
import { AuthProvider } from '../auth/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="signin" options={{ title: 'Sign In' }} />
        <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="messList" options={{ title: 'Mess List' }} />
        <Stack.Screen name="BookingConfirmation" options={{ title: 'Booking Confirmation' }} />
      </Stack>
    </AuthProvider>
  );
}
