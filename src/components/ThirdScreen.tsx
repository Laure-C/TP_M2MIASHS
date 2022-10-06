import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { StyleSheet } from 'react-nativescript';
import { WeatherByCityService } from '../services/weatherByCity.service';
import { LinksIconWeather } from '../assets/LinkIconWeather';

type ThirdScreenProps = {
  route: RouteProp<MainStackParamList, 'GrenobleWeather'>;
  navigation: FrameNavigationProp<MainStackParamList, 'GrenobleWeather'>;
};

export function ThirdScreen({ navigation }: ThirdScreenProps) {
  const grenobleWeather = WeatherByCityService.getWeatherByCityName('Grenoble');
  return (
    <flexboxLayout style={styles.container}>
      <label class="titre">Météo de {grenobleWeather.cityName}</label>
      <image
        src={LinksIconWeather[grenobleWeather.forecastWeather?.currently?.icon]}
      />
      <label>{grenobleWeather.forecastWeather?.currently?.summary}</label>
      <button onTap={() => navigation.goBack()}>Retour Menu</button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
