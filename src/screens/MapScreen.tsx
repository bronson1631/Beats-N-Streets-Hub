import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Simple mock data for events and artists — replace with Supabase queries later
const mockPlaces = [
  {
    id: 'evt1',
    type: 'event',
    title: 'Street Beats Live',
    latitude: 37.78825,
    longitude: -122.4324,
  },
  {
    id: 'art1',
    type: 'artist',
    title: 'DJ Neon',
    latitude: 37.78925,
    longitude: -122.4334,
  },
  {
    id: 'evt2',
    type: 'event',
    title: 'Open Mic Night',
    latitude: 37.78625,
    longitude: -122.4314,
  },
];

export default function MapScreen({ navigation }: any) {
  const [loading] = useState(false);

  const initialRegion = {
    latitude: mockPlaces[0].latitude,
    longitude: mockPlaces[0].longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Note: no provider prop so the map can render in Expo Go without embedded native keys.
          If you later add a Google Maps API key for Android, we can set provider={PROVIDER_GOOGLE}
          and add the key to app.json android config. */}
      <MapView style={{ flex: 1 }} initialRegion={initialRegion} showsUserLocation={true}>
        {mockPlaces.map((p) => (
          <Marker
            key={p.id}
            coordinate={{ latitude: p.latitude, longitude: p.longitude }}
            title={p.title}
            description={p.type}
            onPress={() => navigation.navigate('Home', { screen: 'Home', params: { id: p.id } })}
          />
        ))}
      </MapView>

      {loading && (
        <View style={{ position: 'absolute', top: 20, left: 0, right: 0, alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
}
