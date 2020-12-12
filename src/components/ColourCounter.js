import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ColourCounter = ({ colour, level, onIncrease, onDecrease }) => {
    
    return (
        <View>
            <Text style={styles.text} >{colour}: {level}</Text>
            <TouchableOpacity onPress={onIncrease} style={styles.button} >
                <Text style={styles.button} >+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDecrease} style={styles.button} >
                <Text style={styles.button} >-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      textAlign: 'center'
    },
    button: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });

export default ColourCounter;