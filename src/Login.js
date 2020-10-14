import React from 'react';
import {SafeAreaView, View, Text, Image,StyleSheet} from 'react-native';
import { Dimensions, ScrollView,KeyboardAvoidingView,Platform } from 'react-native';
import { Input, Button} from './components/index';

const Login= () => {

    return(
        <SafeAreaView style={{ flex:1 }}>
            <KeyboardAvoidingView style={{ flex:1 }}
            behavior={Platform.OS == 'android' ? null : "padding"}>
            <ScrollView style={{ flex:1, backgroundColor: '#b2dfdb' }} 
            bounces = {false}>
            <View style={{ flex:1 }}>
                <Image source = {require('./images/1.png')} 
                style = {styles.logoStyle}
                />
                
                <Input holder = 'E-posta Adresinizi Giriniz' />
                <Input holder = 'Sifrenizi Giriniz' />

                <Button ceyhun="Giriş Yap" />

            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};


export default Login

const styles = StyleSheet.create({
    logoStyle:{
        backgroundColor:'salmon',
        resizeMode:'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.3,
        //bunlara carpi bolu diyerek direkt olarak boyutlandirabiliriz
        //width: 150,
        //height: 100,
        
    }
})

