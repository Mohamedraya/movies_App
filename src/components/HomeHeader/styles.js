import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        elevation: 4,
        alignItems: "center",
    },

    titleView: {
        flex: 1,
        marginLeft: 105
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },

    iconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    search: {
        paddingRight: 10
    }
});