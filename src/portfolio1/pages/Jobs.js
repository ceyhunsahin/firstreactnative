import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';


const Jobs = (props) =>{

    const {selectedLanguage} = props.route.params;

    return(
        <SafeAreaView>
            <View>
                <Text>Jobs</Text>
                <Text>{selectedLanguage}</Text>
            </View>
        </SafeAreaView>
    )
}

export { Jobs };