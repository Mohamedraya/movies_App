import React from 'react';
import {View,Text,Image, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from '../../assets/theme/colors';
import styles from './styles';


function MovieItem ({name,rate,imageUrl,onPress}) {

    return (
       <TouchableOpacity onPress={onPress}> 
        <View style={styles.container}>
            <Image source={{uri: "https://image.tmdb.org/t/p/w500/" + imageUrl}} style={styles.img}/>
            <Text style={styles.movName}>{name}</Text>
            <View style={styles.rateView}>
             <MaterialIcons name="star-rate" color={colors.yellow} size={20}/>
             <Text>{rate}</Text>
            </View>
            
        </View>
      </TouchableOpacity>
    );
};

export default MovieItem;