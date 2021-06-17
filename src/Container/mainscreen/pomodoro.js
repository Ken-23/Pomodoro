import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function Pomodoro() {
  return (
    <View>
      <View style={styles.takeinput}>
        <View style={styles.workTime}>
          <Text>Work length</Text>
          <TextInput />
        </View>
        <View style={styles.breakTime}>
          <Text>Break length</Text>
          <TextInput />
        </View>
      </View>
      <View>
        <Text>Time to do some work!</Text>
      </View>
      <View style={styles.timer}>
        <Text>25 mintues</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  takeinput: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  workTime: {
    width: '50%',
    padding: '10%',
  },
  breakTime: {
    width: '50%',
    padding: '10%',
  },
  timer: {
    height: 150,
    marginTop: 80,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2c2a3',
  },
});
