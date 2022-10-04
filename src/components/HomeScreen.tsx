import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { StyleSheet } from 'react-nativescript';
import { MainStackParamList } from './NavigationParamList';

type HomeScreenProps = {
  route: RouteProp<MainStackParamList, 'WeatherForecast'>;
  navigation: FrameNavigationProp<MainStackParamList, 'WeatherForecast'>;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label>Bienvenue dans le TP</label>
      <label>React NativeScript</label>
      <button onTap={() => Dialogs.alert('Tapped!')}>Premier bouton</button>
      <button onTap={() => navigation.navigate('AllWeathers')}>
        Second bouton
      </button>
      <button onTap={() => navigation.navigate('GrenobleWeather')}>
        Météo Grenoble
      </button>
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
