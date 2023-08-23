import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterScreen from './src/CounterScreen'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterScreen />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CAD5E2"
  }
})