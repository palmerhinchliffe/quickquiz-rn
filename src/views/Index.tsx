import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Index = ({ navigation }: any) => {
  const [joinInputValue, onChangeText] = React.useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>Join by ID:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={joinInputValue}
        />
        <Button
          onPress={() =>
            navigation.navigate('Quiz', {
              roomId: joinInputValue,
            })
          }
          title="Join Quiz"
          accessibilityLabel="Join the quiz"
        />
      </View>
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

export default Index