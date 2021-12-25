// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// UserReview : Gives user a textinput to write their experience using this web app 
//               & shows the thanks for feedback message along with statement of authorships>> 

// import all the  libraries & components we are going to use/...
import React, {useState}from 'react';
import { Text, TextInput, View } from 'react-native';
import {StyleSheet} from 'react-native';

const UserReview = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.textHeaderStyle}>
      <Text style= {styles.textReview}>Write Feedback Here:</Text> 
      <TextInput
        style={{height: 40, color: 'white', fontWeight: 25}}
        placeholder="Type your experience here..!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 30, color:'white'}}>
        {text.split(' ').map((word) => word && '🆃🅷🅰🅽🅺🆂..🅵🅾🆁.. 🆃🅷🅴.. 🅵🅴🅴🅳🅱🅰🅲🅺..  ☃️ 🎄❄😊☃️ 🎄❄😊 ☃️ 🎄❄😊                                       ✍ @Author Utsavkumar Patel (000820474)..').join(' ')}
      </Text>
    </View>
  );
}

//styles for the UserReview...
const styles = StyleSheet.create({
    textHeaderStyle:{
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        backgroundColor: 'black',
      },
      textReview:{
          textAlign: 'center',
          fontSize:30,
          color:'white',
      }
});

//export UserReview...
export default UserReview;