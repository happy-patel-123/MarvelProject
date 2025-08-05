import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../screens/Splash"
import Login from "../screens/Login"
import SignUp from "../screens/SignUp"
import Home from "../screens/Home"

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="SignUp" component={SignUp} /> 
                <Stack.Screen name="Home" component={Home} options={{ headerShown: true }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation