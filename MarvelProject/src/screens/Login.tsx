import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import * as Colors from "../resources/values/Colors"

const Login = ({ navigation }) => {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={styles.container}>
        <Text>Login</Text>
        <TextInput 
          value={username}
          onChangeText={setUserName}
        />
        <TextInput 
          value={password}
          onChangeText={setPassword}
        />
        <Button 
          title='Login' 
          onPress={() => navigation.navigate('SignUp')} 
        />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: Colors.babyWhite
  }
})