import React from 'react';
import {View,Text,Image, TouchableOpacity} from "react-native";
import styles from './styles';


function CastImage ({name,imageUrl,onPress}) {

    return (
       <TouchableOpacity onPress={onPress}> 
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} style={styles.img}/>
            <Text style={styles.movName}>{name}</Text>            
        </View>
        </TouchableOpacity>
    );
};

export default CastImage;