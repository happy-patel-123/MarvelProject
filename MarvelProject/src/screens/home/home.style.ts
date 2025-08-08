import { StyleSheet } from "react-native";
import * as Colors from "../../resources/values/Colors";
import { Responsive } from "../../utils/ResponsivePixels";
import Fonts from "../../resources/fonts/Fonts";

const homeStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginHorizontal: Responsive.size24,
        padding: Responsive.size16,      
    },
    welcomeText: {
        fontSize: Responsive.size18,
        // fontWeight: 600,
        fontFamily: Fonts.bold,
        color: Colors.black,
    },
    nameText: {
        fontSize: Responsive.size20,
        // fontWeight: 'bold',
        fontFamily: Fonts.bold,
        color: Colors.primaryRed,
    },
    img: {
        height: Responsive.size80,
        width: Responsive.size80,
        borderRadius: Responsive.size40,
        borderWidth: 2,
        borderColor: Colors.primaryRed,
    },
});

export { homeStyles };
