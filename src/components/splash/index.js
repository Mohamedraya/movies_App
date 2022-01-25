import React ,{useEffect}from "react";
import {View,Text,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
//import { onAuthStateChanged ,getAuth} from "firebase/auth";
import {auth} from "../../firebase/firebaseConfig";


function Splash () {

    const navigation = useNavigation();
    //const auth = getAuth();

    useEffect(() => {
        NavigateToAuthOrHomeScreen()
    },[navigation]);
   

    function NavigateToAuthOrHomeScreen () {
          setTimeout( function  () {

              auth.onAuthStateChanged((user) => {
                  if (user) {
                      navigation.reset({
                          index: 0,
                          routes: [{name: "HomeScreen"}]
                      })
                  }
                  else {
                    navigation.reset({
                        index: 0,
                        routes: [{name: "LoginScreen"}]
                    })
                  }
              })
          }, 1000);
        
          }

    return (
        <View style={styles.container}>
          <Text style={styles.splashText}>movietime</Text>
        </View>
    );
};

export default Splash;