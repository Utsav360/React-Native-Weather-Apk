// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// TimeFormat : (Extra)Display the time and current date using current date and time function...


// import all the  libraries & components we are going to use/...
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';



function TimeFormat (){
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.textHeaderStyle}>
              Welcome to My Weather App 
            </Text><br/><br/><br/>
            <Text style={styles.textCurrentStyle}>
              Current Date Time
            </Text>
            <Text style={styles.textCurrentStyle}>
              {currentDate}
            </Text>
        
        </View>
      </View>
     
    </SafeAreaView>
  );
};

//styles for the TimeFormat ...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'left-center',
    padding: 10,
  },
  textCurrentStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 90,
    backgroundColor: 'black',
  },
  textHeaderStyle:{
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    backgroundColor: 'lightblue',
   
  },
});

//export TimeFormat...
export default TimeFormat;