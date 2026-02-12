import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RoleSelect() {
  // 1. Defining the specific types here prevents the TS error later
  const [role, setRole] = useState<'patient' | 'caregiver' | 'doctor' | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (role) {
      // 2. We use 'as any' to bypass the RelativePathString error you saw in your screenshot
      router.push(`/${role}/dashboard` as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Your logo from assets/images/logo.png */}
        <Image 
          source={require('../assets/images/logo1.png')} 
          style={styles.logo} 
        />

        <Text style={styles.title}>Welcome to medicLock.</Text>
        <Text style={styles.subtitle}>choose your role</Text>

        {/* Role Buttons */}
        <TouchableOpacity 
          style={[styles.roleBtn, role === 'patient' && styles.selectedBtn]} 
          onPress={() => setRole('patient')}
        >
          <Text style={styles.roleText}>patient</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleBtn, role === 'caregiver' && styles.selectedBtn]} 
          onPress={() => setRole('caregiver')}
        >
          <Text style={styles.roleText}>caregiver/family</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.roleBtn, role === 'doctor' && styles.selectedBtn]} 
          onPress={() => setRole('doctor')}
        >
          <Text style={styles.roleText}>Doctor</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity 
          style={[styles.continueBtn, !role && styles.disabledBtn]} 
          onPress={handleContinue}
          disabled={!role}
        >
          <Text style={styles.continueText}>continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#E1D9F1' 
  },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  logo: { 
    width: 120, 
    height: 120, 
    marginBottom: 20, 
    resizeMode: 'contain' 
  },
  title: { 
    fontSize: 24, 
    color: '#5D3A9B', 
    fontWeight: '500' 
  },
  subtitle: { 
    fontSize: 20, 
    color: '#5D3A9B', 
    marginBottom: 40 
  },
  roleBtn: { 
    width: '90%', 
    padding: 15, 
    borderRadius: 25, 
    borderWidth: 1.5, 
    borderColor: '#5D3A9B', 
    marginBottom: 15, 
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)' 
  },
  selectedBtn: { 
    backgroundColor: 'rgba(93, 58, 155, 0.3)' 
  },
  roleText: { 
    fontSize: 18, 
    color: '#5D3A9B' 
  },
  continueBtn: { 
    width: '90%', 
    padding: 18, 
    borderRadius: 30, 
    backgroundColor: '#5D3A9B', 
    marginTop: 20, 
    alignItems: 'center' 
  },
  continueText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  disabledBtn: { 
    opacity: 0.5 
  }
});