import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import Strings from '../../language/Strings'
import { isEmpty, isNotValidEmail } from '../../utils/Utils'
import { storage } from '../signup/SignUp'
import { localAssets } from '../../resources/assets/Assets'
import * as Colors from '../../resources/values/Colors'
import { loginStyles as styles } from './login.style'

const Login = ({ navigation }) => {
  const [username, setUserName] = useState<string>('happy@gmail.com')
  const [password, setPassword] = useState<string>('1234')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const navigateHome = () => {
    if (isEmpty(username) || isEmpty(password)) {
      Alert.alert('Invalid Credentials', 'Please enter username and password properly')
    } else if (isNotValidEmail(username)) {
      Alert.alert('Invalid Email', 'Please enter valid email')
    } else {
      const mmkvUsername = storage.getString('email');
      const mmkvPassword = storage.getString('password');
      const mmkvFullName = storage.getString('fullName');
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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.txtInput}
          placeholder={Strings.password}
          placeholderTextColor={Colors.placeholderColor}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        >
          <Image
            source={showPassword ? localAssets.eye : localAssets.eyeClosed}
            style={styles.eyeImage}
          />
        </TouchableOpacity>
      </View>
      
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


