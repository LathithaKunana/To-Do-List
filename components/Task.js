import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return(
      <View style = {styles.item}>  
        <View style ={styles.itemLeft}>
            <TouchableOpacity style ={styles.square}></TouchableOpacity>
            <Text style={styles.itemtext}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: 'whitesmoke',
        padding: 15,
        borderRadius: 10,
        marginLeft: 20,
        width: '90%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection : 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor :'black',
        borderRadius:  5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
})

export default Task;