import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>This is the home-screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding:20
    }
})