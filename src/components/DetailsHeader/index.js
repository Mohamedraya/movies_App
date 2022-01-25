import React from "react";
import {View,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../assets/theme/colors";
import styles from "./styles";



function DetailsHeader () {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color={colors.white}/>
            </TouchableOpacity>

            

            <View style={styles.iconView}>
                <View style={styles.search}>
                {<TouchableOpacity>
                    <Feather name="heart" size={24} color={colors.white}/>
                 </TouchableOpacity>}
                </View>
                <View>
                {<TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={24} color={colors.white}/>
                 </TouchableOpacity>}
                </View>
                 
            </View>
        </View>
    );
};

export default DetailsHeader;