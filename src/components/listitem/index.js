import React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import colors from "../../assets/theme/colors";


function ListItem ({imageUrl}) {

    return (
        <TouchableOpacity >
           <View style={styles.container}>
              <Image style={styles.img} source={{uri: imageUrl}}/>
              
              <View style={styles.movName}>
                 <Text style={styles.name}>Dolitte</Text>
                 <Text style={styles.subTitle}>Dr Dolitte</Text>
                 <Text style={styles.type}>Dolitte</Text>
                 <Text style={styles.year}>Dolitte</Text>                 
              </View>
              <View>
              <View style={styles.rateView}>
                   <MaterialIcons name="star-rate" color={colors.yellow} size={30}/>
                   <Text style={styles.rateText}>9.3</Text>
              </View>
              </View>
                         
           </View>
           
                 
           
        </TouchableOpacity>
    );
}


export default ListItem;
