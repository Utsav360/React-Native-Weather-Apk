// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// ButtonBasic displays buttons with click functionality & disable button... 

// import all the  libraries & components we are going to use/...
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

//export ButtonBasics class...
export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('LOL😂! You have followed simple instructions! 😜♛')
  }

  //method calls with alert messages..
  _onPressButton1(){
      alert('Success🎉! Page is loaded!')
  }

  _onPressButton2(){
    alert('You pressed 0K button!')
 }

  render() {
    return (
      <View style={styles.container}>
         
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me ✅"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Disabled Button"
            disabled
            color="#841584"
          />
        </View>
        
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton1}
            title="Refresh ⚡!"
          /> &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onPress={this._onPressButton2}
            title="🆗!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

//styles for ButtonBasics....
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'left',
   backgroundColor: 'white',
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});