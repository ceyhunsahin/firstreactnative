import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useSelector} from "react-redux";

const Component_B = (props) => {
    const ourCounter = useSelector(zehra => zehra.counter)
    const myUserName = useSelector(canim => canim.userName)
    return (
        <SafeAreaView style = {{flex : 1, backgroundColor : '#efefef'}}>
            <View>
                <Text>Component_B</Text>
                <Text style = {{fontSize:40}}>Counter : {ourCounter}</Text>
                <Text style = {{fontSize:40}}>Name : {myUserName}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Component_B;