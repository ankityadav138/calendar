import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EventDetails = ({route}) => {
    const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{item.name}</Text>
    </SafeAreaView>
  )
}

export default EventDetails

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})