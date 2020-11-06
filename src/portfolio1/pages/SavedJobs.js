import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text,FlatList, TouchableOpacity } from 'react-native';
import {JobItem} from '../components'


const SavedJobs = (props) =>{
    const [jobList, setJobList] = useState([]);

    AsyncStorage.getItem("@SAVED_JOBS" )
    .then(res => {
        const list = JSON.parse(res);
        setJobList(list);
    })

    return(
        <SafeAreaView>
            <View>
                <FlatList 
                    data = {jobList}
                    renderItem = {({item}) => <JobItem job = {item} />}
                />
                <TouchableOpacity 
                    style = {{
                        backgroundColor : 'blue', 
                        padding :10, 
                        borderRadius : 10,
                        position : 'absolute', 
                        top : 560, 
                        left : 10 
                }}
                    onPress = {async () => 
                        {let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
                        //const savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
                        savedJobList = []
                        const updatedJobList = savedJobList;
                        //const updatedJobList = [... JSON.parse(savedJobList),selectedJob];
                        await AsyncStorage.setItem('@SAVED_JOBS',JSON.stringify(updatedJobList))}


                    }
                >
                    <Text style = {{color : 'white'}}> Kayitlari Sil</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export { SavedJobs };