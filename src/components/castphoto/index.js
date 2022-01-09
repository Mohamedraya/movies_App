import React from 'react';
import {View,Image} from 'react-native';
import styles from './styles';


function CastPhoto ({imageUrl}) {

    return (
        <View style={styles.container}>
           <Image style={styles.img} source={{uri: imageUrl}}/>
        </View>
    );
}

export default CastPhoto;