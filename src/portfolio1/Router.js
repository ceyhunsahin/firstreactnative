import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Introduction,Jobs,SavedJobs} from './pages';

const Stack = createStackNavigator();

function Router () {
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
