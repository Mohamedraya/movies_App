/*import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import HomeNavigation from "./HomeNavigation";
import MovieDetailsScreen from '../screens/movieDetails';
import CastDetailsScreen from '../screens/CastDetails';
import colors from '../assets/theme/colors';


const Drawer = createDrawerNavigator();

function DrawerNavigation  ()  {
    return (
        <Drawer.Navigator drawerContent={(props) => {<CustomDrawer {...props}/>}} 
                          initialRouteName='Home'>
            <Drawer.Screen name="Home" component={HomeNavigation}/>                
               
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;*/

///////////////////////
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigation from "./HomeNavigation";
import  CustomDrawer  from '../components/CustomDrawer';

import colors  from '../assets/theme/colors';

const Drawer = createDrawerNavigator();

 function DrawerNavigation() {

    return (
        <Drawer.Navigator
            drawerContent={ (props) => <CustomDrawer { ...props } /> }
            initialRouteName={ 'Home' }
            screenOptions={ { headerTintColor:colors.white } }
        >
            <Drawer.Screen
                name="Home"
                component={ HomeNavigation }
                options={ { headerShown: false } }

            />

        </Drawer.Navigator >
    );
};

export default DrawerNavigation;