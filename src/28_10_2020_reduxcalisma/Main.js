import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';

import reducer from './context/reducer';
import initialState from './context/store'

const store = createStore(reducer, initialState);

const Main = (props) => {
    // HOC high order component
    return (
        <Provider store={store}> 
            <SafeAreaView style={{ flex :1}}>
                <Firstpage style={{ flex :1}}/>
                <Secondpage style={{ flex :2}}/>

            </SafeAreaView>
        </Provider>
    )
}

export default Main;


