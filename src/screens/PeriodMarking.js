import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Calendar, Agenda, AgendaList } from 'react-native-calendars';


const PeriodMarking = () => {
  const [selected, setSelected] = useState('');

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

  const getMark = () => {
    let marked = {};
    for (let i = 1; i <= 10; i++) {
      let day = i.toString().padStart(2, '0');
      let periods = [
        {
          startingDay: i == 1,
          endingDay: i == 10,
          color: 'teal',
        },
        (i >= 2 && i <= 6) && {
          startingDay: i == 2,
          endingDay: i == 6,
          color: 'orange',
        }
      ];
      marked[`2023-07-${day}`] = {
        periods
      };
    }
    return marked;
  };

  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markingType='multi-period'
        // markedDates={getMarked()}
        // markedDates={getMark()}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
    </View>
  )
}

export default PeriodMarking

const styles = StyleSheet.create({

})