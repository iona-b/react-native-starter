// For each component, we need: 
// 1. Libraries to create component.
// 2. Components: Functions that return JSX
// 3. Stylesheet: To add style or layout to component
// 4. Export component

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// A Text element is a primitive React element.
// Other primitive elements are views, images, and buttons.
// We can use the View element to wrap/nest other elements inside.

const ComponentsScreen = () => {

    const name = "Iona"

    return (
        <View> 
            {/* <Text style={styles.textStyle} >This is the components screen</Text>
            <Text>{greeting}</Text> */}
            {/* Curly braces allow us to refer to regular JS elements */}
            {/* We cannot show JavaScript objects inside of a text element! */}
            <Text style={styles.headerStyle} >My First React App!</Text>
            <Text style={styles.subHeaderStyle} >Hi there! I'm {name}!</Text>
        </View>
    );
    // Babel turns JSX into plain JavaScript code.
    // babeljs.io allows you to see the JS version on JSX.
    // We use JSX so our component is more legible and maintainable.

};

const styles = StyleSheet.create({
    // We don't have to use StyleSheet.create.
    // However, it allows us to validate styling rules.
    // You can pass a styling object into a JSX element, e.g. <Text> style={{ fontSize: 30 }} </Text>
    // This is called inline styling.

    textStyle: {
        fontSize: 30
    },

    headerStyle: {
        fontSize: 45
    },

    subHeaderStyle: {
        fontSize: 20
    }

});

export default ComponentsScreen;