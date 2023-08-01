import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import task from '../app/components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
      <Task />
          <View style={styles.inputBox}>
            <Text style={styles.heading}> Today's List</Text>
            <View style={styles.input}>
              <Text></Text>
            </View>
            <View style={styles.input}>
              <Task />
            </View>
          </View>
        

      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  taskContainer : {

  },
  heading : {
    color : 'white',
    fontSize: 20,
    fontWeight: "800",
    margin: 23,
    top: "30%",
    alignSelf: 'center'


  },
  input : {
    backgroundColor : 'white',
    width : "85%",
    height: 50,
    top : "50%",
    margin: 10,
    borderRadius : 4,
    alignSelf: 'center',
  },
  inputBox : {
    backgroundColor :"black",
    width: '90%',
    height: 500,
    padding : 0,
    margin: 20,
    top: "20%",
    borderRadius:  20

  }
});
