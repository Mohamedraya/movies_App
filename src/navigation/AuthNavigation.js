import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from '../screens/Login';
import SignupScreen from "../screens/Signup";

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="loginScreen" component={LoginScreen}/>
            <AuthStack.Screen name="SignupScreen" component={SignupScreen}/>
        </AuthStack.Navigator>
    );
}

export default AuthNavigation;