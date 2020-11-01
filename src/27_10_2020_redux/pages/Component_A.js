import React from 'react';
import {SafeAreaView, Text, View,Button} from 'react-native';

import {useDispatch, useSelector} from "react-redux";

const Component_A = (props) => {
    const myCounter = useSelector(ceyhun => ceyhun.counter);
    const dispatch = useDispatch();
    return (
        <SafeAreaView style = {{flex : 1}}>
            <View>
                <Text>Component_A</Text>
                <Text style = {{fontSize:40}}>Counter : {myCounter}</Text>
                <Button title = 'Increase' onPress = {() => dispatch({type : 'INCREASE_COUNTER'})} />
                <Button title = 'Decrease' onPress = {() => dispatch({type : 'DECREASE_COUNTER'})} />
                <Button title = 'mis a jour votre identifiant' onPress = {() => dispatch({
                    type : 'mis a jour', 
                    payload : {
                        newUserName : "ceyhun"

                }
            })} />
            </View>
        </SafeAreaView>
    )
}

export default Component_A;