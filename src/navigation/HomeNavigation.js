import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/movieDetails";
import CastDetailsScreen from "../screens/CastDetails";



const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen}/>
        <Stack.Screen name="CastDetailsScreen" component={CastDetailsScreen}/>
    </Stack.Navigator>
    );
}

export default HomeNavigation;