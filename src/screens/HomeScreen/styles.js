import { StyleSheet ,Dimensions} from "react-native";
import colors from "../../assets/theme/colors";


const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },

    title: {
        fontSize: 22,
        color: colors.black,
    },

    subTitle: {
        fontSize: 18,
        color: colors.secondary
    },

    slide: {
       width: Width,
       height: Height * 0.25,
       borderRadius: 20
    }
});