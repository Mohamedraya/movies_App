
import React from 'react';
import { Text, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import {auth} from "../firebase/firebaseConfig";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import  colors  from '../assets/theme/colors';


 function CustomDrawer({ navigation, ...props }) {

   
    const handleSignOut = () => {
      auth.signOut().then(() => {
        navigation.navigate("LoginScreen");
      }).catch((err) => {console.log(err)});
    };

  return (

    <View style={{ flex: 1 }} >
      <View style={{ backgroundColor: colors.white, }}>

        <Text style={{ fontFamily: 'roboto_medium', marginLeft: 15, marginVertical: 20, fontSize: 18, color: colors.black }}>
          Helo
        </Text>
      </View>


      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={colors.black} size={35} name={'home'} />
        )}
        label="Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={colors.black} size={35} name={'user'} />
        )}
        label="Profile"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <Entypo color={colors.black} size={35} name={'new'} />
        )}
        label="News"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={colors.black} size={35} name={'hearto'} />
        )}
        label="favorate"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={colors.black} size={35} name={'staro'} />
        )}
        label="recommendations"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <DrawerItem
        icon={({ focused, color, size }) => (
          <AntDesign color={colors.black} size={35} name={'setting'} />
        )}
        label="sittings"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />


      <View style={{ marginLeft: 8, marginTop: 100 }}>
        <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <AntDesign color={colors.black} size={30} name={'logout'} />
          )}
          onPress={handleSignOut}
        />
      </View>
    </View >
  );
};

export default CustomDrawer;