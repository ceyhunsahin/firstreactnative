import React from 'react';
import {SafeAreaView,View,Text,Button} from 'react-native';

import { useSelector } from 'react-redux';

const Secondpage = () => {
    const counter = useSelector( b => b.counter);
    const newName = useSelector( c => c.userName);
    const newPass = useSelector( d => d.password)
    return (
        <SafeAreaView>
            <View>
            <Text style = {{fontSize:40}}>{counter}</Text>
            <Text style = {{fontSize:40}}>{newName}</Text>
            <Text style = {{fontSize:40}}>{newPass}</Text>
            </View>
        </SafeAreaView>
    )
}
export default Secondpage;