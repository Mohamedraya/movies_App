import {View,Text, TouchableOpacity} from "react-native";
import {Surface} from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../assets/theme/colors";
import styles from "./styles";


const AppHeader = ({menu,back,title,optionalIcon,optionalFun,right,iconColor,headerBg}) => {

    const navigation = useNavigation();

    return (
        <Surface style={[styles.header,{backgroundColor: headerBg}]}>
            <View style={styles.view}>
                {menu &&<TouchableOpacity onPress={() => navigation.optionDrawer()}>
                    <Feather name="menu" size={24} color={iconColor}/>
                 </TouchableOpacity>}

                {back &&<TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color={iconColor}/>
                 </TouchableOpacity>}               
                 
            </View>
            <View style={styles.titleView}>
                {title &&<Text>{title}</Text>}
            </View>
            <View style={[styles.view,styles.rightView]}>
                {<TouchableOpacity onPress={optionalFun}>
                    <Feather name={optionalIcon} size={24} color={iconColor}/>
                 </TouchableOpacity>}
                 {<TouchableOpacity>
                    <Ionicons name={right} size={24} color={iconColor}/>
                 </TouchableOpacity>}
            </View>
        </Surface>
    );
}

export default AppHeader;