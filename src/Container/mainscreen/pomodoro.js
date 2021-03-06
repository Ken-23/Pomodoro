import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/button';

export default function Pomodoro({
  setworkTime,
  setbreakTime,
  Play,
  time,
  SetTime,
  Reset,
  title,
  label,
  isRunning,
}) {
  return (
    <View>
      <View style={styles.takeinput}>
        <View style={styles.workTime}>
          <Text>Work length</Text>
          <TextInput keyboardType="numeric" onChangeText={setworkTime} />
        </View>
        <View style={styles.breakTime}>
          <Text>Break length</Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={setbreakTime}
            disabled={isRunning ? true : false}
          />
        </View>
      </View>
      <View style={styles.eventText}>
        <Text>{title}</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertext}>
          {time.mins < 10 ? '0' + time.mins : time.mins}:
          {time.secs < 10 ? '0' + time.secs : time.secs}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Button text={label} handleClick={Play} />
        </View>
        <View>
          <Button text="SetTime" handleClick={SetTime} />
        </View>
        <View>
          <Button text="Reset" handleClick={Reset} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  takeinput: {
    flexDirection: 'row',
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
    marginTop: 45,
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2c2a3',
  },
  eventText: {
    marginTop: 40,
    marginLeft: 10,
  },
  timertext: {
    fontSize: 30,
    color: '#3d3d29',
  },
  buttons: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
