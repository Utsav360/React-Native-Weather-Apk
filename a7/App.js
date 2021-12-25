// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."
// APP file shows all output result by combining all the components..

// import all the  libraries & components we are going to use/...
import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import UserReview from './components/UserReview';
import TimeFormat from './components/TimeFormat';
import ButtonBasics from './components/ButtonBasics';
import SectionListView  from './components/View';
import Flex from './components/Flex';
import DomainSearch from './components/DomainSearch';

function App() {
  return ( 
    <View style={styles.container} >
      {/* Adding the components */}
    
      <TimeFormat/>
      <Flex/>
      <Image
          style={styles.imageStyle}
          source={require('./assets/weather.jpg')}
      />
      <SectionListView/>
      <ButtonBasics/>
      <DomainSearch/>
      <UserReview/>
      
    </View>
  );
}

// styles for App...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'center',
  },
  headertext: {
    color: 'black',
    alignItems:'center',
    justifyContent: 'center',
  },
  imageStyle: {
    marginTop:0,
    marginLeft:250,
    height: 550,
    width:900,
    textAlignVertical:'center',
    backgroundColor: 'powderblue',
    }
});

//export App....
export default App;