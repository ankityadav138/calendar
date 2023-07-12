import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Calendar, Agenda, AgendaList } from 'react-native-calendars';



//components

//data
import { dates } from '../staticData/Data';


const CalendarScreen = ({ navigation }) => {

  const [selected, setSelected] = useState('');
  let markedDate = {}
  let markItems = {}
  let dotsItem  = {}
  dates.map((item) => {
    markedDate[item.date] = {
      // color: 'green',
      // marked: true,
      // dots: [{ color: 'green', key: item.round}]
      
    }

    markItems[item.date] = [
      {
        name: item.round,
      }
    ]
  })

  console.log('---------->>>', markedDate)

  const getMarked = () => {
    let marked = {};
    for (let i = 1; i <= 10; i++) {
      let day = i.toString().padStart(2, '0');
      marked[`2023-07-${day}`] = {
        startingDay: i == 1,
        endingDay: i == 10,
        color: 'yellow',
        textColor: '#aaa',
        disabled: true,

      };
    }
    return marked;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        // horizontal={true}
        selected={new Date().toISOString().slice(0, 10)}
        markingType='multi-dot'
        markedDates={markedDate}
        items={markItems}
        pastScrollRange={50}
        // onDayChange={day => {
        //   console.log('day changed');
        // }}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails', {item:item})} style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        
      />
    </SafeAreaView>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 30,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
})