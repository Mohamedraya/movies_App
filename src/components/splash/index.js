import React ,{useEffect}from "react";
import {View,Text,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {authentication} from "../../firebase/firebaseConfig";
import styles from "./styles";
import { onAuthStateChanged } from "firebase/auth";


function Splash () {

    const navigation = useNavigation();

    useEffect(() => {
        NavigateToAuthOrHomeScreen()
    },[navigation]);
   

    function NavigateToAuthOrHomeScreen () {
          setTimeout(function () {
              onAuthStateChanged(authentication,(user) => {
                  if (user != null) {
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
          <Text style={styles.splashText}>MovieTime</Text>
        </View>
    );
};

export default Splash;