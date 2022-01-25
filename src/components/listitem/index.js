import React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import colors from "../../assets/theme/colors";


function ListItem ({imageUrl,title,rate}) {

    return (
        <TouchableOpacity >
           <View style={styles.container}>
              <Image style={styles.img} source={{uri: "https://image.tmdb.org/t/p/w500/" +imageUrl}}/>
              
              <View style={styles.movName}>
                 <Text style={styles.name}>{title}</Text>
                 <Text style={styles.subTitle}>Dr Dolitte</Text>
                 <Text style={styles.type}>Dolitte</Text>
                 <Text style={styles.year}>Dolitte</Text>                 
              </View>
              <View>
              <View style={styles.rateView}>
                   <MaterialIcons name="star-rate" color={colors.yellow} size={25}/>
                   <Text style={styles.rateText}>{rate}</Text>
              </View>
              </View>
                         
           </View>
           
                 
           
        </TouchableOpacity>
    );
}


export default ListItem;
