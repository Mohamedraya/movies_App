import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/movieDetails";
import CastDetailsScreen from "../screens/CastDetails";



const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen}/>
        <Stack.Screen name="CastDetailsScreen" component={CastDetailsScreen}/>
    </Stack.Navigator>
    );
}

export default HomeNavigation;