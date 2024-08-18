// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32}}>Hello, World!</Text>
      <Text style={{fontSize:24}}>Platform: {Platform.OS === 'ios' ? "ios" : "Android"}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  
});
// The issue in your code arises from how you are trying to use StatusBar.currentHeight from the expo-status-bar package. The StatusBar imported from expo-status-bar does not have a currentHeight property, which is available in the StatusBar component from the react-native package. To fix this, you should import StatusBar from react-native instead of expo-status-bar.