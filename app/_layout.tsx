import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Entry Point (Splash Screen) */}
      <Stack.Screen name="index" /> 
      
      {/* Selection Page */}
      <Stack.Screen name="role-select" />
      
      {/* Role-based Dashboards */}
      <Stack.Screen name="patient/dashboard" />
      <Stack.Screen name="doctor/dashboard" />
      <Stack.Screen name="caregiver/dashboard" />
    </Stack>
  );
}