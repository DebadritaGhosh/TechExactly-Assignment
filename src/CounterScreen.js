import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter,decreaseCounter } from './redux/reducers/counterReducer';

const CounterScreen = () => {
    const count = useSelector(state => state.count);

    const dispatch = useDispatch();

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(decreaseCounter())}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <Text style={styles.content}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(increaseCounter())}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </>
    )
}

export default CounterScreen;

const styles = StyleSheet.create({
    button: {
       width: 50,
       height: 50,
       backgroundColor: "#5A20CB",
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 5
    },
    content: {
        marginHorizontal: "10%",
        fontSize: 30,
        fontWeight: "900"
    },
    text: {
        fontSize: 30,
        color: "#FFFFFF"
    }
  })