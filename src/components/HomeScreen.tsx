import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { StyleSheet } from 'react-nativescript';
import { MainStackParamList } from './NavigationParamList';

type HomeScreenProps = {
  route: RouteProp<MainStackParamList, 'Home'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Home'>;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>Bienvenue dans le TP</label>
      <label style={styles.text}>React NativeScript</label>
      <button style={styles.button} onTap={() => Dialogs.alert('Tapped!')}>
        Premier bouton
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate('Secondary')}
      >
        Second bouton
      </button>
      <button style={styles.button} onTap={() => navigation.navigate('Third')}>
        Third bouton
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
