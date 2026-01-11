import React from 'react';
import { View, Text, Button } from 'react-native';
import AudioPlayer from '../components/AudioPlayer';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 12 }}>Beats N Streets — Home</Text>
      <Button title="Open Artist" onPress={() => { /* TODO navigate to artist */ }} />
      <View style={{ marginTop: 24 }}>
        <AudioPlayer />
      </View>
    </View>
  );
}
