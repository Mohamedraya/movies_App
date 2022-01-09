import React from 'react';
import {View,Text,Image} from "react-native";
import styles from './styles';


function SmallMovieItem ({name,rate,imageUrl}) {

    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.img}/>
            <Text style={styles.movName}>{name}</Text>
            <Text>{rate}</Text>
        </View>
    );
};

export default SmallMovieItem;