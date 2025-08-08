import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../screens/splash/Splash"
import Login from "../screens/login/Login"
import SignUp from "../screens/signup/SignUp"
import Home from "../screens/home/Home"

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="SignUp" component={SignUp} /> 
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation