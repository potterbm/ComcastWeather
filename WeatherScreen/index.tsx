import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import LightningIcon from './icons/Lightning';
import CloudsIcon from './icons/Clouds';
import CloudLightningIcon from './icons/CloudLightning';
import CloudLightRainIcon from './icons/CloudLightRain';
import SnowIcon from './icons/Snow';
import SunIcon from './icons/Sun';

const icons = {
  Thunderstorm: LightningIcon,
  Drizzle: CloudLightRainIcon,
  Rain: CloudLightRainIcon,
  Snow: SnowIcon,
  Atmosphere: CloudLightningIcon,
  Clear: SunIcon,
  Clouds: CloudsIcon,
}

export default function WeatherScreen({ weatherType, subtitle, title, description }) {
  const Component = icons[weatherType];
  console.log('weatherType', weatherType);
  console.log('Component', Component);

  return (
    <View style={styles.container}>
      <Component style={styles.icon} />
      <Text style={styles.subtitle}>{ subtitle }</Text>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.description}>{ description }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 40,
  },
  subtitle: {
    color: '#444444',
    fontSize: 12,
    fontFamily: 'Ubuntu_700Bold',
  },
  title: {
    color: '#444444',
    fontSize: 48,
    fontFamily: 'Ubuntu_700Bold',
  },
  description: {
    color: '#888888',
    fontSize: 12,
    fontFamily: 'Ubuntu_400Regular',
    marginTop: 20,
    width: 275,
  },
});
