import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import * as Font from 'expo-font'
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),//we give each font a key 'nunito-regular' and require go and searches for it in the assets folder
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){//here if fontsloaded is true then we render the home component bec we know we can now use our fonts loaded 
    return(
      <Home />
    );
  } else {
    return(
      <AppLoading //we will present apploading component which is a blank component while our component loads in background
      startAsync={getFonts}// what function do we want to run while loading this component 
      onFinish={() => setFontsLoaded(true)}//since startasync is asyn when it finishes setfontsloaded is now true and we render the home component
      />
    )
  }
}


