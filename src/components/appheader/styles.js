import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ccc"
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