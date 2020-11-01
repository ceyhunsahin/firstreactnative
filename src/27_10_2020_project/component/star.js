import React from "react";
import {View, SafeAreView, Text, StyleSheet} from "react-native";
const Star= (props) =>{
    const val = props.selectedRestaurant.price
    console.log(val)
    let stars="";
    for (var i=0; i< val; i++){
        stars+=":étoile:"
        }
    return(
         <Text style={{color:"white", fontWeight:"bold"}}>Price Rating : {stars}</Text>
    )
};
export {Star};