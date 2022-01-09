import React from 'react';
import {View,Text,Image} from "react-native";
import styles from './styles';


function CastPicture () {

    return (
        <View style={styles.container}>
            <Image source={{uri: "https://reactjs.org/logo-og.png"}} style={styles.img}/>           
        </View>
    );
};

export default CastPicture;