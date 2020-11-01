import React from 'react';
import {SafeAreaView,View,Text,Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

const Firstpage = (props) => {
    const selector = useSelector(a => a.counter);
    const dispatch = useDispatch();
    return (
        <SafeAreaView>
            <View>
            <Text>{selector}</Text>
            <Button 
                title = 'Artir'
                onPress={() => dispatch({type : 'increase'})}
            />
            <Button 
                title = 'Azalt'
                onPress={() => dispatch({type : 'decrease'})}
            />
            <Button 
                title = 'isim guncelle'
                onPress={() => dispatch({
                    type : 'userName',
                    x : { NewUserName : 'Ceyhun'}
                })}
            />
            <Button 
                title = 'password guncelle'
                onPress={() => dispatch({
                    type : 'password',
                    x : {NewPassword : 'Volkaren'}
                })}
            />
            </View>
        </SafeAreaView>
    )
}
export default Firstpage;



