import { Text, View } from 'react-native'
import React from 'react'
import { homeStyles as styles } from './home.style'

const Home = ({ route }) => {

  const { name } = route.params

  return (
    <View style={styles.container}>
      <Text>Welcome,{' '}{name}</Text>
    </View>
  )
}

export default Home

