import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";


export default StyleSheet.create({

    container: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
    },

    

    rateView: {
        flexDirection: "row",
        paddingLeft: 120,
        paddingBottom: 70
    },

    img: {
        width: 67,
        height: 120,
        borderRadius: 15,
        paddingTop: 10
    },

    movName: {
        marginLeft: 23
    },

    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.dark
    },

    subTitle: {
        fontSize: 17
    },

    type: {
        paddingTop: 15,
        fontSize: 17
    },

    rateText: {
        fontSize: 15,
        paddingLeft: 10,

    },

    year: {
        fontSize: 17
    }
});