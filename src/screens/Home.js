import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import { Agenda } from 'react-native-calendars'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppButton title={'Calendar Agenda'} handler={() => navigation.navigate('Calendar')} />
      <AppButton title={'Period Marking Calendar'} handler={() => navigation.navigate('PeriodMarking')} />

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    
   
  }
  ,
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
    alignSelf: 'center'
  }
})