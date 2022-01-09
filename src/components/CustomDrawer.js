import React ,{useState}from 'react';
import {View,Text, TouchableOpacity} from "react-native";
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {signOut} from "firebase/auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import LogoutModal from './logoutmodal';



const CustomDrawer = ({navigation,...props}) => {

    const [ ModalVisible, setModalVisible ] = useState(false);

    const navigation = useNavigation();

    signoutUser = async () => {
      try {
         await signOut()
         
      }
      catch (err) {
        console.log(err);
      }
    }

    return (
      <View style={{flex: 1}}>  
        <DrawerContentScrollView {...props}>
            <View style={{flex: 1 , backgroundColor: "#fff",paddingTop: 10}}>
              <DrawerItemList {...props}/>
            </View> 

            <LogoutModal
              onBack={ () => setModalVisible(false) }
              onPress={ () => {setModalVisible(false);signoutUser()}}
              visible={ ModalVisible }
            />           
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: "#ccc"}}>
          <TouchableOpacity onPress={() => {navigation.closeDrawer();
            setModalVisible(true);}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: "row" ,alignItems: "center"}}>
               <Ionicons name="exit-outline" size={22}/>
               <Text style={{fontSize: 15, marginLeft: 5}}>LogOut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>  
    );
};

export default CustomDrawer;