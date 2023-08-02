import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './app/components/task';



export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.taskContainer}>
        {/*heading box and heading text */}
          <View style={styles.inputBox}>
            <Text style={styles.heading}> To Do List</Text>
          </View>

          {/*outputs */}
          <View style={styles.input}>
              <Text></Text>
          </View>
          <View style={styles.input}>
              
          </View>

          {/*to do inputs */}
          <View style={styles.toDoInput}>
            
              
          </View>
          <View style={styles.addIcon}>
              
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
    alignSelf: 'center',
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
    height: 70,
    padding : 0,
    top: "10%",
    borderRadius:  20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  toDoInput : {
    width: '70%',
    height: 45,
    backgroundColor: 'whitesmoke',
    borderRadius:  20,
    margin: 28,
    top: 420
  },

  addIcon : {
    width:45,
    height: 45,
    top: 345,
    left: 305,
    borderRadius:  30,
    backgroundColor: 'whitesmoke',

  }
});
