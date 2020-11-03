import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Introduction,Jobs,SavedJobs} from './pages';

const Stack = createStackNavigator();

const Router = () =>{
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions = {{headerShown:'false'}}>
                <Stack.Screen 
                    name = 'Intro' 
                    component = {Introduction}>
                </Stack.Screen>
                <Stack.Screen 
                    name = 'Jobs' 
                    component = {Jobs}>
                </Stack.Screen>
                <Stack.Screen 
                    name = 'SavedJobs' 
                    component = {SavedJobs}>
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
