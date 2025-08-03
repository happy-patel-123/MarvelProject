import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../screens/Splash"
import Login from "../screens/Login"
import SignUp from "../screens/SignUp"

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="SignUp" component={SignUp} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation