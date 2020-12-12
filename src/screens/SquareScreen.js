import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOUR_INCREMENT = 5;

    const setColour = (colour, change) => {
        switch (colour) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        } 
    }

    return (
        <View>
            <Text style={styles.header} >RGB Colour Viewer</Text>
            <ColourCounter
                level={red}
                colour="Red"
                onIncrease={() => setColour('red', COLOUR_INCREMENT)}
                onDecrease={() => setColour('red', -1 * COLOUR_INCREMENT)}
            />
            <ColourCounter
                level={green}
                colour="Green"
                onIncrease={() => setColour('green', COLOUR_INCREMENT)}
                onDecrease={() => setColour('green', -1 * COLOUR_INCREMENT)}
            />
            <ColourCounter
                level={blue}
                colour="Blue"
                onIncrease={() => setColour('blue', COLOUR_INCREMENT)}
                onDecrease={() => setColour('blue', -1 * COLOUR_INCREMENT)}
            />
            <Text> </Text>
            <View style={{ height:400, width: 1000, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20
      }
});

export default SquareScreen;