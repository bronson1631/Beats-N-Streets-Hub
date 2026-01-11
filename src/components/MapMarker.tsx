import React from 'react';
import { View, Text } from 'react-native';

// Simple presentational marker callout — we keep it minimal for now. If custom markers are desired,
// we would use MapView.Marker and supply a custom view.

export default function MapMarker({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={{ padding: 8 }}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      {subtitle ? <Text>{subtitle}</Text> : null}
    </View>
  );
}
