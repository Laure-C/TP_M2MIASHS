import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { StyleSheet } from 'react-nativescript';
import { WeatherByCityService } from '../services/weatherByCity.service';

type ThirdScreenProps = {
  route: RouteProp<MainStackParamList, 'Third'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Third'>;
};

export function ThirdScreen({ navigation }: ThirdScreenProps) {
  WeatherByCityService.addACityWeather(45.1, 5.43, 'Grenoble');
  WeatherByCityService.addACityWeather(47.541, 1.5414, 'Orléans');
  console.log(WeatherByCityService.getAllWeather());
  const grenobleWeather = WeatherByCityService.getWeatherByCityName('Grenoble');
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text} text="You're viewing the third screen! " />
      <button style={styles.button} onTap={() => navigation.goBack()}>
        Go back {grenobleWeather.cityName}
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    textAlignment: 'center',
    fontSize: 24,
    color: 'black',
  },
  button: {
    fontSize: 24,
    color: '#2e6ddf',
  },
});
