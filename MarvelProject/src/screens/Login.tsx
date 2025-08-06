import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import * as Colors from '../resources/values/Colors'
import { Responsive } from '../utils/ResponsivePixels'
import Strings from '../language/Strings'
import { isEmpty, isNotValidEmail } from '../utils/Utils'
import { storage } from './SignUp'

const Login = ({ navigation }) => {
  const [username, setUserName] = useState<string>('happy@gmail.com')
  const [password, setPassword] = useState<string>('1234')

  const navigateHome = () => {
    if (isEmpty(username) || isEmpty(password)) {
      Alert.alert('Invalid Credentials','Please enter username and password properly')
    } else if (isNotValidEmail(username)) {
      Alert.alert('Invalid Email','Please enter valid email')
    } else {
      const mmkvUsername = storage.getString('email');
      const mmkvPassword = storage.getString('password');
      const mmkvFullName =  storage.getString('fullName');
      if ((mmkvUsername === username) && (mmkvPassword === password)) {
        navigation.navigate('Home', { name: mmkvFullName }) 
      } else {
        Alert.alert('No Account Found', 'Please SignUp to get going')
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.welcomeBack}{' '}👋</Text>
      <Text style={styles.subHeading}>{Strings.logIn}</Text>

      <TextInput
        style={styles.txtInput}
        placeholder={Strings.usernameOrEmail}
        placeholderTextColor={Colors.placeholderColor}
        value={username}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.txtInput}
        placeholder={Strings.password}
        placeholderTextColor={Colors.placeholderColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={navigateHome}
      >
        <Text style={styles.loginText}>{Strings.login}</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.newUserText}>{Strings.newHere}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>{' '}{Strings.signUp}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
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
  loginButton: {
    backgroundColor: Colors.primaryRed,
    paddingVertical: Responsive.size14,
    borderRadius: Responsive.size10,
    alignItems: 'center',
    marginTop: Responsive.size10,
  },
  loginText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: Responsive.size16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Responsive.size30,
  },
  newUserText: {
    fontSize: Responsive.size14,
    color: Colors.placeholderColor,
  },
  signUpText: {
    fontSize: Responsive.size14,
    color: Colors.primaryRed,
    fontWeight: 'bold',
  },
})
