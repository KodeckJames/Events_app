// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import HomeStack from './navigation/Stack';

export default function App() {
  const [text, setText] = useState("")
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  
});
// The issue in your code arises from how you are trying to use StatusBar.currentHeight from the expo-status-bar package. The StatusBar imported from expo-status-bar does not have a currentHeight property, which is available in the StatusBar component from the react-native package. To fix this, you should import StatusBar from react-native instead of expo-status-bar.