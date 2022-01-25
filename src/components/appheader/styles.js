import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        
        
        elevation: 4,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        
    },

    view: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },

    titleView: {
        flex: 1,
        alignSelf: "center"
    },

    rightView: {
        justifyContent: "flex-end"
    }
});