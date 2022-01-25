import { StyleSheet ,StatusBar} from "react-native";
import colors from "../../assets/theme/colors";


export default StyleSheet.create({


    castInfo: {
        flexDirection: "row",
        padding: 10
    },

    img: {
        width: 130,
        height: 130,
        borderRadius: 80
    },

    castName: {
        paddingLeft: 15,
        paddingTop: 15
    },

    name: {
        fontSize: 22,
        color: colors.black,
        fontWeight: "bold"
    },

    subName: {
        fontSize: 18,       
    },

    info: {
        flexDirection: "row",
        paddingLeft: 2,
        marginTop: 15
    },

    detailsTxt: {
        fontSize: 18,
        color: colors.dark
    },

    subdetailsTxt: {
        fontSize: 18
    },

    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },

    title: {
        fontSize: 22,
        color: colors.black,
        fontWeight: "bold"
    },

    subTitle: {
        fontSize: 18,
        color: colors.secondary
    },

    flatTitle: {
        fontSize: 22,
        color: colors.black,
        fontWeight: "bold",
        padding: 10
    },

});