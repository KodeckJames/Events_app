// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32}}>Hello, World!</Text>
      <Text style={{ fontSize: 24 }}>Platform: {Platform.OS === 'ios' ? "ios" : "Android"}</Text>
      <ScrollView style={{}}>
        <View style={styles.pink}>
          <TextInput defaultValue={text} onChangeText={txt => setText(txt)} style={styles.textInput} />
          <Button title='Press me' onPress={() => console.log("Hello")
          } style={{ color: "crimson" }} />
          <TouchableOpacity style={styles.btn} onPress={()=>console.log("Hello")
          }>
            <Text style={{color:"white"}}>Click me too!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"orange"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  pink: {
    backgroundColor: "pink", height: 1600, padding: 20
  },
  textInput: {
    borderWidth: 1, padding: 10, marginBottom:10
  },
  btn: {
    backgroundColor:"purple", padding:10, width:150, height:100, justifyContent:"center", alignItems:"center"
  }
  
});
// The issue in your code arises from how you are trying to use StatusBar.currentHeight from the expo-status-bar package. The StatusBar imported from expo-status-bar does not have a currentHeight property, which is available in the StatusBar component from the react-native package. To fix this, you should import StatusBar from react-native instead of expo-status-bar.