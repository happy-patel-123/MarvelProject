import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#F5F5F5'
  }
})