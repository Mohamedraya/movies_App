import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({

    wrapper: {
        flex: 1,
        marginTop: 100
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        paddingTop: 20,
        fontWeight: "700",
        
    },

    subTitle: {
        fontSize: 17,
        textAlign: "center",
        paddingVertical: 20,
        fontWeight: "500"
    },

    input: {
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 15,
        width: "100%",
        marginVertical: 15
      },

    ques: {
        color: colors.secondary,
        marginVertical: 10
    },

    form: {
        paddingTop: 20
    },

    createSection: {
        flexDirection: "row",
        paddingLeft: 70,
        marginTop: 100
    },

    infoText: {
        fontSize: 17
    },

    regsText: {
        paddingLeft: 17,
        color: colors.secondary,
        fontSize: 16
    }
});