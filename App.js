import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './Navigation/MealsNavigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


const FetchFonts=()=>{
  return Font.loadAsync({
    'open-sans-regular':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [isFontLoaded,setIsFontLoaded]=useState(false);
  if(!isFontLoaded){
    return(
      <AppLoading startAsync={FetchFonts} onFinish={()=>setIsFontLoaded(true)}  />
    )
  }

  return (
    <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
