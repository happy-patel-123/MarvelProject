import { Image, Text, View } from 'react-native'
import React from 'react'
import { homeStyles as styles } from './home.style'

const Home = ({ route }) => {

  const { name } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome,{' '}<Text style={styles.nameText}>{name}</Text>
      </Text>
      <Image
        source={require('../../resources/assets/testImages/ProfileImage.png')}
        style={styles.img}
      />
    </View>

  )
}

export default Home

