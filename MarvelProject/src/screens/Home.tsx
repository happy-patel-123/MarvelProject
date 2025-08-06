import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Colors from "../resources/values/Colors"

const Home = ({ route }) => {

  const { name } = route.params

  return (
    <View style={styles.container}>
      <Text>Welcome,{' '}{name}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: Colors.babyWhite
  }
})