/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import HomeNavigation from './src/navigation/HomeNavigation';
//import MovieDetailsScreen from "./src/screens/movieDetails";
//import {NavigationContainer} from "@react-navigation/native";
//import DrawerNavigation from "./src/navigation/DrawerNavigation";
//import SplashScreen from './src/screens/splash';



function App () {

  return (
      <NavigationContainer>
        <HomeNavigation/>
      </NavigationContainer>
  );
}


export default App;
