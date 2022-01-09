import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10
      },

    title: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
});

export default styles;