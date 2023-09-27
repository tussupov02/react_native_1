import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = ({taskText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>    
        <View style={styles.square}>  
        </View>
        <Text>{taskText}</Text>
      </View>
      <View style={styles.right}>  
        </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:10,
        padding:15,
        paddingHorizontal:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    left:{
        flexDirection:"row",


    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#55bcf6",
        opacity:0.4,
        borderRadius:5,
        marginRight: 15
    },
    text:{
        fontSize:14
    },
    right:{
        width:12,
        height:12,
        borderWidth:2,
        borderColor:"#55BCF6",
        borderRadius:10

    }
})