import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import * as Colors from '../resources/values/Colors'
import { Responsive } from '../utils/ResponsivePixels'
import Strings from '../language/Strings'

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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

      <TextInput
        style={styles.txtInput}
        placeholder={Strings.password}
        placeholderTextColor={Colors.placeholderColor}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={() => {}}>
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
})
