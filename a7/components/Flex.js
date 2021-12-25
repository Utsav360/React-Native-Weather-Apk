// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// Flex : Display the flexbox layout in 3 colours using flex ratio....

// import all the  libraries & components we are going to use/...
import React from "react";
import { StyleSheet,View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {

      // Try setting `flexDirection` to `"row"`...
      flexDirection: "row"
    }]}>
      <View style={{ flex: 1, backgroundColor: "brown" }} /> ⚡ ♛ <br/> ⚡ ♛ <br/> ⚡ ♛<br/><br/><br/><br/><br/><br/><br/><br/><br/> ⚡ ♛ <br/> ⚡ ♛ <br/> ⚡ ♛ 
      <View style={{ flex: 2, backgroundColor: "orange" }} /> ☯ ❄ <br/> ☯ ❄ <br/> ☯ ❄<br/><br/><br/><br/><br/><br/><br/><br/><br/> ☯ ❄ <br/> ☯ ❄ <br/> ☯ ❄ 
      <View style={{ flex: 1, backgroundColor: "lightgreen" }} />  
    </View>
  );
};

// styles for Flex...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

// export flex ...
export default Flex;