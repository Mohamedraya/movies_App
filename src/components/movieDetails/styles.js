import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";


export default StyleSheet.create({

    backgimg: {
        width: "100%",
        height: 150,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,        
    },

    wrapper: {
        flexDirection: "row",
        position: "absolute",
        marginTop: 80,
        marginLeft: 20
    },

    img: {
        width: 100,
        height: 150,
        borderRadius: 15,      
    },

    movName: {
        marginTop: 80,
        marginLeft: 10,
        fontSize: 15,
        color: colors.black
    },

    rateView: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 150,
        color: colors.black
    },

    rateTxt: {
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
    },

    timeTxt: {
        marginTop: 5
    },

    icon: {
        marginLeft: 20
    },

    movType: {
        flexDirection: "row",
        //paddingHorizontal: 25,
        marginLeft: 110
    },

    typView: {
        width: 70,
        height: 25,
        backgroundColor: colors.light,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15
    },

    detailsContainer: {
        flexDirection: "row",
        paddingLeft: 15,
        alignItems: "center"
    },

    details: {
        marginHorizontal: 3,
    },
 
    detailsTxt: {
        fontSize: 18,
        color: colors.dark
    },

    dateTxt: {
       fontSize: 18
    },

    dircText: {
        fontSize: 18,
        color: colors.secondary
    },

    storyTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.dark,
        paddingLeft: 18
    },

    story: {
        fontSize: 18,
        marginHorizontal: 10,
        paddingHorizontal: 10
    },

    cast: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.dark,
        paddingLeft: 18,
        paddingTop: 5
    },

    
});