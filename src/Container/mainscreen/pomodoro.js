import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/button';

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
      <View style={styles.eventText}>
        <Text>Time to do some work!</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertext}>25 mintues</Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Button text="Play" />
        </View>
        <View>
          <Button text="Pause" />
        </View>
        <View>
          <Button text="Stop" />
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
