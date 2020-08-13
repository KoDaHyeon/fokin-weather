import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp}){ //temp는 온도
    return <View style={styles.container}>
        <Text>{temp}</Text>
        </View> //내가 띄울 온도 컴포넌트의 구성
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired //temp는 숫자니까
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})