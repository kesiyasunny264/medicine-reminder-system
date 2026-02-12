import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DoctorDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Terminal</Text>
      <Text>Manage your patients here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E1D9F1', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#5D3A9B', fontWeight: 'bold' }
});