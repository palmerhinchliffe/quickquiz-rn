import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Quick Quiz...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default About
