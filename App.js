import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';



export default function App() {
  const [task, setTask] = useState();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/*heading box and heading text */}
        <View style={styles.headerBox}>
          <Text style={styles.heading}> To Do List</Text>
        </View>

          {/*outputs */}
        <View style={styles.myItems}> 
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>   
        

          {/*to do inputs */}
        <KeyboardAvoidingView
            style={styles.writeTaskBox}>

          <TextInput style={styles.textInput} placeholder={'write a task'} />

          <TouchableOpacity>
            <View style={styles.addBox} >
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>

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
  headerBox : {
    backgroundColor :"black",
    width: '90%',
    height: 70,
    padding : 0,
    top: "5%",
    borderRadius:  20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  
  myItems: {
    marginTop: 60
  },

  writeTaskBox: {
    position: 'absolute',
    top: 700,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'whitesmoke',
    borderRadius: 60,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1
  },

  addBox : {
    width: 60,
    height: 60,
    backgroundColor: 'whitesmoke',
    borderRadius: 60,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
