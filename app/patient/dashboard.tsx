import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function PatientDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Patient Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.pillText}>Next Medication: 10:00 AM</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E1D9F1', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 24, color: '#5D3A9B', fontWeight: 'bold', marginBottom: 20 },
  card: { padding: 20, backgroundColor: 'white', borderRadius: 15, width: '80%' },
  pillText: { fontSize: 18, color: '#5D3A9B' }
});