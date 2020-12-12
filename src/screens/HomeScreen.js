import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// const HomeScreen = (props) => {
const HomeScreen = ({navigation}) => { // Destructured method

  // return (
  //   <View>
  //     <Text style={styles.text}>This is an app!</Text>
  //     <Button 
  //       title="Go to Components Demo"
  //       onPress={() => props.navigation.navigate("Components")}
  //     />
  //           <Button 
  //       title="Go to List Demo"
  //       onPress={() => props.navigation.navigate("List")}
  //     />
  //     {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
  //       <Text>Go To List Demo</Text>
  //     </TouchableOpacity> */}
  //   </View>
  // )

    return (
    <View>
      <Text style={styles.text}>This is an app!</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button 
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button 
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button 
        title="Go to Colour Demo"
        onPress={() => navigation.navigate("Colour")}
      />
      <Button 
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;