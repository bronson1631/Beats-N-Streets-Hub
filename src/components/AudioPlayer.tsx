import React, { useEffect, useState, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioPlayer() {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const onPlay = async () => {
    try {
      if (!soundRef.current) {
        const { sound } = await Audio.Sound.createAsync(
          // placeholder remote or local file
          { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
          { shouldPlay: true }
        );
        soundRef.current = sound;
        setIsPlaying(true);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onPause = async () => {
    if (soundRef.current) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    }
  };

  return (
    <View>
      <Text>Audio Player (placeholder)</Text>
      {isPlaying ? (
        <Button title="Pause" onPress={onPause} />
      ) : (
        <Button title="Play" onPress={onPlay} />
      )}
    </View>
  );
}
