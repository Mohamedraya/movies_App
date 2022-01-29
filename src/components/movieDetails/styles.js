import { StyleSheet ,Dimensions} from "react-native";
import colors from "../../assets/theme/colors";


export default StyleSheet.create({

    /*container: {
        //alignSelf: 'center',
        //marginTop: 100,
        width: "100%",
        //backgroundColor: "red",
        overflow: 'hidden', // for hide the not important parts from circle
        margin: 0,
        height: 160,
      },
      background: { // this shape is a circle 
        borderRadius: 110, // border borderRadius same as width and height
        width: "100%",
        height: 500,
        //marginLeft: -100, // reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden', // hide not important part of image
        
      },
      image: {
        height: 160, // same width and height for the container
        width: "100%",
        position: 'absolute', // position it in circle
        bottom: 0, // position it in circle
        //marginLeft: 100, // center it in main view same value as marginLeft for circle but positive
      },*/

    backgimg: {
        width: "100%",
        height: 150,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
              
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
        fontSize: 18,
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
        marginLeft: 115
    },

    typView: {
        width: 70,
        height: 25,
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginHorizontal: 6
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

    stars: {
        paddingTop: 6
    }
    
});