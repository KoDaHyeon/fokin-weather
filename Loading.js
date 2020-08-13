import React from "react";
import {StyleSheet, Text, View} from "react-native"; //stylesheet import하는 거 잊지 말기

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
    );
    // return 안의 내용이 태그 여러개일 경우 return ( 내용. ;은 붙이지 않음 );
    // return 안의 내용이 태그 한개일 경우 return <태그></태그>; 가능
} 

const styles= StyleSheet.create({
    container:{
        flex:1,  //이 각각은 모두 JS object
        justifyContent: "flex-end", //""든 ''든 상관x.둘다 string
        paddingHorizontal :30, //CSS에는 없음
        paddingVertical: 100, //CSS에는 없음
        backgroundColor: "#FDF6AA"
    },
    text: {
        color:"#2c2c2c",
        fontSize: 30 //px를 쓸때는 ""string형식으로 써야하고 px를 안쓰고 숫자만 쓸때는 ""없이
    }
});