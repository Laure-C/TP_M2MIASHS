import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { StyleSheet } from 'react-nativescript';

type SecondaryScreenProps = {
  route: RouteProp<MainStackParamList, 'Secondary'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Secondary'>;
};

export function SecondaryScreen({ navigation }: SecondaryScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label
        text="You're viewing the secondary screen!"
        class="px-2 py-1 text-center text-blue-600 bg-blue-200 rounded-full"
      />

      <button style={styles.button} onTap={() => navigation.goBack()}>
        Go back
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
