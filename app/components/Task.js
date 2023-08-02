import React from 'react';
import { View, Text, SafeAreaView, } from 'react-native'

const Task = () => {

    return (
        <View style={styles.text}>
            <Text style={{
                color: 'black'
            }}> This is what we gonna do</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    text : {
        backgroundColor : 'black',
        width : "50%",
        height: '50%',
    }
})

export default Task;