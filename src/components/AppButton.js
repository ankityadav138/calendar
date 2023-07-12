import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = ({title, handler}) => {
  return (
    <TouchableOpacity style={styles.appButton} onPress={handler}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  appButton:{
    backgroundColor:'blue',
    width:130,
    height:70,
    borderRadius:10,
    elevation:5,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    color:'white',
    fontSize:18,
    fontWeight:'500',
    alignSelf:'center'
    
  }
})