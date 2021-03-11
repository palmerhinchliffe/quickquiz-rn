import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Index from './src/views/Index'
import Quiz from './src/views/Quiz'
import About from './src/views/About'

const App = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Index}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
