import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// FlatList is another primitive type.
// It turns an array of elements into a list.
// We need to pass in two different props:
    // data
    // renderItem prop: tells the app how we want it to display each element on the screen.
// FlatList is preferable to map in RN because it can create the list more efficiently.

const ListScreen = () => {

    // We need to add a key property.
    // If we don't provide a key and, for instance, we delete an item from the list, RN will delete all the elements and rebuild the entire list from scratch.
    // We want RN to just delete the single element.
    // The key property allows RN to track the objects and just delete one based on the key.
    // Keys are for performance optimisation for making changes to lists.

    // Two ways to add in a key prop:
        // OPTION 1:
            // Add key property to each object.
            // Key properties must:
                // Be strings.
                // Be unique.
                // Be consistent across renders.

    // const friends = [
    //     {name: "Friend 1", key: "1" },
    //     {name: "Friend 2", key: "2" },
    //     {name: "Friend 3", key: "3" },
    //     {name: "Friend 4", key: "4" },
    //     {name: "Friend 5", key: "5" },
    //     {name: "Friend 6", key: "6" },
    //     {name: "Friend 7", key: "7" },
    //     {name: "Friend 8", key: "8" },
    //     {name: "Friend 9", key: "9" },
    //     {name: "Friend 10", key: "10" }
    // ]

    const friends = [
        {name: "Friend 1", age: 10},
        {name: "Friend 2", age: 20},
        {name: "Friend 3", age: 30},
        {name: "Friend 4", age: 40},
        {name: "Friend 5", age: 50},
        {name: "Friend 6", age: 60},
        {name: "Friend 7", age: 70},
        {name: "Friend 8", age: 80},
        {name: "Friend 9", age: 90},
        {name: "Friend 10", age: 100}
    ]

    return <FlatList
        // Tells our app that we want it to scroll horizontally.
        horizontal
        // Tells our app to hide the scroll bar.
        showsHorizontalScrollIndicator={false}
        // OPTION 2:
            // keyExtractor will be called on every object inside the array. 
            // Inside the function, we inspect the object and return the key property to use for it.
            // Here, we could use the name property.
            // Generally the keyExtractor method is preferable.
        keyExtractor={(friend) => friend.name}
        data={friends}
        // renderItem={(element) => {
            // element is not one element of the element array exactly.
            // It's more like this:
                // element === { item: {name: "Friend 1" }, index: 0}
        // }}
        // We can therefore destructure like so:
        // item gives us direct access to the item object
        renderItem={({item}) => {
            // item === { name: "Friend 1"}
            return <Text style={styles.textStyle} >{item.name}: {item.age}</Text>
        }}
    />;
}

const styles = StyleSheet.create({

    textStyle: {
        marginVertical: 50
    }

});

export default ListScreen;