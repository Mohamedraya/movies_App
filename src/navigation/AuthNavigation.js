import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from '../screens/Login';
import SignupScreen from "../screens/Signup";


const AuthStack = createNativeStackNavigator();

function AuthNavigation  ({navigation})  {
    
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
            <AuthStack.Screen name="SignupScreen" component={SignupScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;