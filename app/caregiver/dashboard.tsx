import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CaregiverDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caregiver Portal</Text>
      <Text>Monitoring: Patient A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E1D9F1', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, color: '#5D3A9B', fontWeight: 'bold' }
});