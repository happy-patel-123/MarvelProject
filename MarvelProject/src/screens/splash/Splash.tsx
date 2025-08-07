import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Colors from "../../resources/values/Colors"
import { localAssets } from '../../resources/assets/Assets'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={localAssets.splashImage} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: Colors.primaryRed
  }
})