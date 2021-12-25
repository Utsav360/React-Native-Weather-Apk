import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const ButtonWidget = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Testing ..Testing..
      </Text>
      <Button
        title="Click Me!"
        onPress={() => Alert.alert('LOL😂! You have followed simple instructions! 😜')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Utsav Button
      </Text>
      <Button
        title="Press me"
        color="lightgreen"
        onPress={() => Alert.alert('Button with adjusted color pressed!⚡')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled//disable button
        onPress={() => Alert.alert('❌ Cannot press this one!!')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Opps! 👈 Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Opps! 👉 Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonWidget;