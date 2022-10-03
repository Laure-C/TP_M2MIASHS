import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from './NavigationParamList';
import { StyleSheet } from 'react-nativescript';
import { NativeScriptAutoFitTextModule } from '@nativescript/auto-fit-text/angular';

// Be sure to add the plugin module to your NgModule
@NgModule({
	imports: [NativeScriptAutoFitTextModule],
})


type ThirdScreenProps = {
  route: RouteProp<MainStackParamList, 'Third'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Third'>;
};

export function ThirdScreen({ navigation }: ThirdScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <AutoFitText
        style = {styles.text}
        text="You're viewing the third screen!"
        textWrap="false"
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
