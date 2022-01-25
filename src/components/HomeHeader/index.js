import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../assets/theme/colors";
import styles from "./styles";



function HomeHeader () {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={24} color={colors.black}/>
            </TouchableOpacity>

            <View style={styles.titleView}>
                <Text style={styles.title}>movietime</Text>
            </View>

            <View style={styles.iconView}>
                <View style={styles.search}>
                {<TouchableOpacity>
                    <Feather name="search" size={24} color={colors.black}/>
                 </TouchableOpacity>}
                </View>
                <View>
                {<TouchableOpacity>
                    <Ionicons name="person-outline" size={24} color={colors.black}/>
                 </TouchableOpacity>}
                </View>
                 
            </View>
        </View>
    );
};

export default HomeHeader;