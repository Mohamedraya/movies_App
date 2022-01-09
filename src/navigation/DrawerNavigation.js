import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from '../components/CustomDrawer';
import HomeNavigation from "./HomeNavigation";
import MovieDetailsScreen from '../screens/movieDetails';
import CastDetailsScreen from '../screens/CastDetails';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => {<CustomDrawer {...props}/>}} initialRouteName='Home'
                          screenOptions={{drawerLabelStyle: {marginLeft: -25},
                                          drawerActiveBackgroundColor: "#aa18ea",drawerActiveTintColor:"#fff"}}>
            <Drawer.Screen name="Home"    component={HomeNavigation} options={{
               drawerIcon: () => (
                 <Ionicons name="home-outline" size={22} />
               )            
            }}/>                
            <Drawer.Screen name="Profile" component={MovieDetailsScreen} options={{
               drawerIcon: () => (
                 <Ionicons name="home-outline" size={22} />
               )            
            }}/>
            <Drawer.Screen name="Home"    component={CastDetailsScreen} options={{
               drawerIcon: () => (
                 <Ionicons name="home-outline" size={22} />
               )            
            }}/>

            
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;