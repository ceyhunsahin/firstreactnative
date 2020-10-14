import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  const pressFunction = () => {
    //console.log('merhaba');
    //spread operator
    const user = {
      name: 'Ceyhun',
      age: 35, 
      isAdmin: false
    }
    const member = {
      ...user,
      password:"12345", 
      type:null
    }

    const myArray = [1,2,3,4];

    const secArr = ["Izmir", 'Ankara', ...myArray]
    console.log(user);
    console.log(member);

    // Desctruction Operator
    const myObj = {
      url:"www.google.com",
      data : [1,2,3],
      config: "Empty"
    }

    const {config, data} = myObj;
    console.log(config);
    console.log(data);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello React Native CLARUSWAY</Text>
        <Button title="Log" onPress={pressFunction} />
      </View>
    </SafeAreaView>
  );
};

export default App;
