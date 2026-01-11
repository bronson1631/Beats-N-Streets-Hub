import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AuthScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth screen (placeholder). Implement Supabase auth here.</Text>
      <Button title="Continue to Home" onPress={() => navigation.replace('Home')} />
    </View>
  );
}
