import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizRoom from '../api/QuizRoom'

const Quiz = ({ route, navigation }:any) => {
  React.useEffect(() => {
    if (route.params?.roomId) {
      console.log('Room ID requested: ' + route.params?.roomId)
    } else {
      console.log('No room ID... Create a quiz!')
    }
  }, [route.params?.roomId])

  return (
    <View style={styles.container}>
      <Text>The quiz</Text>
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

export default Quiz
