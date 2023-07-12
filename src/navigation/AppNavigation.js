import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Screens
import CalendarScreen from '../screens/CalendarScreen'
import Home from '../screens/Home';
import EventDetails from '../screens/EventDetails.screen';
import PeriodMarking from '../screens/PeriodMarking';


const AppStack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <AppStack.Navigator initialRouteName='Home'>
            <AppStack.Screen name='Home' component={Home}></AppStack.Screen>
            <AppStack.Screen name='Calendar' component={CalendarScreen}>
            </AppStack.Screen>
            <AppStack.Screen name='EventDetails' component={EventDetails}></AppStack.Screen>
            <AppStack.Screen name='PeriodMarking' component={PeriodMarking}></AppStack.Screen>

        </AppStack.Navigator>
    )
}

export default AppNavigation