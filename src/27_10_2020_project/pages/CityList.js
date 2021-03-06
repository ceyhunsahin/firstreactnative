import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { CityItem, SearchBar } from '../component'

let originalList = []

const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

    // ASYNC-AWAIT 
    const fetchCityData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities"); // response.data da diyebilirdik
        setCityList(data.cities);
        originalList = [...data.cities];
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({ item }) => {
        return (
            <CityItem
                cityName={item}
                onSelect={() => props.navigation.navigate('Restaurants', { selectedCity: item })}
            />
        )
    }

    const renderSeperator = () => <View style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />

    function searchCity(search) {
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();

            return cityName.indexOf(text) > -1;
        })
    /*kullanicin her girdigi deger once value ile searchCity e aktarilir, o deger yeni search olur, once girilen degeri komple buyuk harfe ceviriyoruz, daha sonra sehiri buyuk harfe ceviriyoruz, indexOf ile text icinde olani gosterir.*/
        setCityList(filteredCities);
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 30 }}>Cities</Text>
                <SearchBar
                    placeholder="Search a city..."
                    onSearch={(value) => searchCity(value)}
                />
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
        </SafeAreaView>
    )
}

export { CityList };