/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React  from 'react';
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { NavigationContainer } from '@react-navigation/native';



function App () {

  return (
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
  );
}


export default App;
