import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts, Ubuntu_700Bold, Ubuntu_400Regular} from '@expo-google-fonts/ubuntu';

import screens from './screens';
import useGetWeather from './useGetWeather';
import useGetWeatherType from './useGetWeatherType';
import WeatherScreen from '../WeatherScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_400Regular,
  });

  const weather = useGetWeather();
  const weatherType = useGetWeatherType(weather);

  const screenProps = screens[weatherType];
  console.log('screenProps', screenProps);

  if (!fontsLoaded || !screenProps) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WeatherScreen {...screenProps} />
      <StatusBar style="auto" />
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
});
