// "StAuth10244: I Utsavkumar Patel, 000820474 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

// View : Shows the weather forecasting in ListView...

// import all the  libraries & components we are going to use/...
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const SectionListView = () => {
    return (
      <View style={styles.container}>
      
        <Text style={styles.weather}>Weather Report data(Ontario Province):</Text>
        <SectionList
          sections={[
            {title: 'Burlington', data: ['Today: Friday','Current Weather: SnowFall ☃', 'Temp: -3℃', 'Windy: 🌫 80Km/Hr']},
            {title: 'Hamilton', data: ['Tomorrow: Saturday','Current Weather: Foggy ❆', 'Temp: 0℃', 'Atmosphere: Clear 🔆']},
            {title: 'Hamilton', data: ['Today: Monday','Current Weather: Snowy ❆', 'Temp: 8℃', 'Atmosphere: Sunny 🌞']},
            {title: 'Oakville', data: ['Day: Tuesday','Current Weather: Storm 😪', 'Temp: -2℃','Windy: 15Km/Hr','Expect SnowFall ☁']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

//styles for View....
const styles = StyleSheet.create({
    container: {
     flex: 2,
     paddingLeft:10,
     paddingTop: 10,
     paddingRight: 10,
     alignItems: 'center',
     textAlign: 'center',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 8,
      fontSize: 18,
      height: 30,
    },
    weather: {
        fontSize:25,
        fontWeight: 30,
        backgroundColor: 'green',
        color: 'white'
    },
    title: {
       fontSize: 30,
       backgroundColor: 'lightgrey',
    }
  })
    
// export SectionListView...
export default SectionListView;