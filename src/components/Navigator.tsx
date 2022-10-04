import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from 'react-nativescript-navigation';
import { HomeScreen } from './HomeScreen';
import { ThirdScreen } from './ThirdScreen';
import { SecondaryScreen } from './SecondaryScreen';

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="WeatherForecast"
      screenOptions={{
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="WeatherForecast"
        component={HomeScreen}
        options={{
          title: 'Weather Forecast',
        }}
      />
      <StackNavigator.Screen
        name="AllWeathers"
        component={SecondaryScreen}
        options={{
          title: 'Toutes les météos',
        }}
      />
      <StackNavigator.Screen
        name="GrenobleWeather"
        component={ThirdScreen}
        options={{
          title: 'Météo de Grenoble',
        }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
