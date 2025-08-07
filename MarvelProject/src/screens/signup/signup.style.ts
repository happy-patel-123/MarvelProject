import { StyleSheet } from "react-native";
import * as Colors from '../../resources/values/Colors'
import { Responsive } from '../../utils/ResponsivePixels'

const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.babyWhite,
        paddingHorizontal: Responsive.size30,
        gap: Responsive.size20,
    },
    heading: {
        fontSize: Responsive.size30,
        fontWeight: 'bold',
        color: Colors.primaryRed,
        marginBottom: Responsive.size4,
    },
    subHeading: {
        fontSize: Responsive.size16,
        color: Colors.black,
        marginBottom: Responsive.size10,
    },
    txtInput: {
        height: Responsive.size50,
        backgroundColor: Colors.white,
        borderColor: Colors.borderColor,
        borderWidth: 1,
        borderRadius: Responsive.size10,
        paddingHorizontal: Responsive.size15,
        fontSize: Responsive.size16,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 1,
        elevation: 1,
    },
    signUpButton: {
        backgroundColor: Colors.primaryRed,
        paddingVertical: Responsive.size14,
        borderRadius: Responsive.size10,
        alignItems: 'center',
        marginTop: Responsive.size10,
    },
    signUpText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: Responsive.size16,
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Responsive.size30,
    },
    existingUserText: {
        fontSize: Responsive.size14,
        color: Colors.placeholderColor,
    },
    loginText: {
        fontSize: Responsive.size14,
        color: Colors.primaryRed,
        fontWeight: 'bold',
    },
    passwordContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: Responsive.size15,
        height: Responsive.size20,
        width: Responsive.size20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    eyeImage: {
        height: Responsive.size50,
        width: Responsive.size50,
        tintColor: Colors.placeholderColor,
    },
})

export { signupStyles }