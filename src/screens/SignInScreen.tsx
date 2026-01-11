import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SignInScreen({ navigation }: any) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await signIn(email.trim(), password);
      // Auth state listener will navigate via App
    } catch (e: any) {
      Alert.alert('Sign in failed', e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Sign in</Text>
      <TextInput placeholder="Email" autoCapitalize="none" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 8, marginBottom: 12 }} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, padding: 8, marginBottom: 12 }} />
      <Button title={loading ? 'Signing in...' : 'Sign in'} onPress={onSubmit} disabled={loading} />
      <View style={{ height: 12 }} />
      <Button title="Create account" onPress={() => navigation.navigate('SignUp')} />
      <View style={{ height: 12 }} />
      {/* DEMO: skip auth for quick prototype */}
      <Button title="Continue as demo" onPress={() => navigation.replace('Home')} />
    </View>
  );
}
