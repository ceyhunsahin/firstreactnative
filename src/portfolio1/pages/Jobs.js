import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text,FlatList,Button,TouchableOpacity} from 'react-native';
import Axios from 'axios';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JobItem} from '../components';
import Modal from "react-native-modal";

import {jobs} from '../styles'

const Jobs = (props) =>{

    const [data, setData] = useState([]);
    const [modalFlag,SetModalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");

    const {selectedLanguage} = props.route.params;

    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
        setData(response.data);
    }
    useEffect(() => {
        fetchData();
    },[]);

    const  onJobSelect = (job) => {
        SetModalFlag(true)
        setSelectedJob(job)
    }

    const renderJobs= ({item}) => <JobItem job = {item} onSelect = {() => {
        onJobSelect(item)
    }}/>
    const onJobSave = async () =>{
        let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
        //const savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);
        const updatedJobList = [...savedJobList,selectedJob];
        //const updatedJobList = [... JSON.parse(savedJobList),selectedJob];
        await AsyncStorage.setItem('@SAVED_JOBS',JSON.stringify(updatedJobList))
        {SetModalFlag(false)}
        

    }

    

    return(
        <SafeAreaView style={{flex : 1}}>
            <View style={{flex : 1}}>
                <Text style = {{textAlign : 'center', fontWeight : 'bold', fontSize : 20 }}>JOBS FOR {selectedLanguage.toUpperCase()}</Text>
                
                <FlatList data = {data} renderItem = {renderJobs} />

                <TouchableOpacity 
                    style = {{
                        backgroundColor : 'blue', 
                        padding :10, 
                        borderRadius : 10,
                        position : 'absolute', 
                        bottom : 10, 
                        right : 10 
                }}
                    onPress = {() => props.navigation.navigate('SavedJobs')}
                >
                    <Text style = {{color : 'white'}}> Kayitlilari Gor</Text>
                </TouchableOpacity>
                    
                    
                

                <Modal isVisible = {modalFlag} onBackdropPress = {() => SetModalFlag(false)}>
                    <View style = {jobs.modalBackground}>
                        <View style = {jobs.modalBackground}>
                            <Text style = {jobs.jobTitle}>{selectedJob.title}</Text>
                            <Text>{selectedJob.location} / {selectedJob.title} </Text>
                            <Text>{selectedJob.company}</Text>
                        </View>

                        <View>
                            <WebView source = {{html : selectedJob.description}} />
                        </View>
                        
                        <Button
                            title = 'Kaydet'
                            onPress = {onJobSave}
                        />
                    </View>
                    
                </Modal>

            </View>
        </SafeAreaView>
    )
}

export { Jobs };