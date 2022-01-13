/*import React from 'react';
import {View,Text} from "react-native";
//import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import {signOut} from "firebase/auth";
import colors from '../assets/theme/colors';



function  CustomDrawer  ({...props})  {

    //const [ ModalVisible, setModalVisible ] = useState(false);

    const navigation = useNavigation();

    const signoutUser = async () => {
      try {
         await signOut()
         navigation.reset({
           index: 0,
           routes: [{name: "SplashScreen"}]
         })
      }
      catch (err) {
        console.log(err);
      }
    }

    return (
      <View style={{flex: 1}}>  
        <View style={{backgroundColor: colors.white}}>
         <Text style={{ fontFamily: 'roboto_medium', marginLeft: 15, marginVertical: 20, fontSize: 18, color: colors.black }}>
          Hello
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


      <View style={{ marginLeft: 8, marginTop: 230 }}>
        <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <AntDesign color={colors.black} size={30} name='logout' />)}
          onPress={signoutUser}
        />
      </View>
      </View>  
    );
};

export default CustomDrawer;*/

//////////////////////////////////
import React from 'react';
import { Text, View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import  colors  from '../assets/theme/colors';


 function CustomDrawer({ navigation, ...props }) {

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


      <View style={{ marginLeft: 8, marginTop: 230 }}>
        <DrawerItem
          label="Logout"
          icon={({ focused, color, size }) => (
            <AntDesign color={colors.black} size={30} name={
              focused ? 'logout' : 'logout'} />
          )}
          onPress={ () => {console.log("bye")}}
        />
      </View>
    </View >
  );
};

export default CustomDrawer;