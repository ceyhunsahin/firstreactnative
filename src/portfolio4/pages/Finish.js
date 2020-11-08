import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {finishPage} from './styles';



const Finish = (props) => {
  const userScore = useSelector(global => global.score)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
         <Button
          title = "en basa don"
          onPress={() => props.navigation.navigate('Intro') }
        /> 
      </View>

    </SafeAreaView>
  );
};

export {Finish};