import { Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import * as Colors from '../../resources/values/Colors'
import Strings from '../../language/Strings'
import { isEmpty, isNotValidEmail } from '../../utils/Utils'
import { MMKV } from 'react-native-mmkv'
import { localAssets } from '../../resources/assets/Assets'
import { signupStyles as styles } from './signup.style'

export const storage = new MMKV();

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>('Happy')
  const [email, setEmail] = useState<string>('happy@gmail.com')
  const [password, setPassword] = useState<string>('1234')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const navigateLogin = () => {
    if (isEmpty(fullName) || isEmpty(email) || isEmpty(password)) {
      Alert.alert('Invalid Credentials', 'Please enter username and password properly')
    } else if (isNotValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter valid email')
    } else {
      // Add MMKV Offline Storage
      storage.set('fullName', fullName)
      storage.set('email', email)
      storage.set('password', password)
      // Navigate To Login
      Alert.alert('Success', 'Your Sign Up is complete')
      navigation.navigate('Login')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.createAccount}</Text>
      <Text style={styles.subHeading}>{Strings.signUpToStart}</Text>

      <TextInput
        style={styles.txtInput}
        placeholder={Strings.fullName}
        placeholderTextColor={Colors.placeholderColor}
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.txtInput}
        placeholder={Strings.emailAddress}
        placeholderTextColor={Colors.placeholderColor}
        value={email}
        onChangeText={setEmail}
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


      <TouchableOpacity style={styles.signUpButton} onPress={navigateLogin}>
        <Text style={styles.signUpText}>{Strings.signUp}</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.existingUserText}>{Strings.alreadyHaveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>{' '}{Strings.loginNow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp