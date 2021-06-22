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
  workTime,
  setworkTime,
  breakTime,
  setbreakTime,
  isWorkSession,
  isRelaxSession,
  setWorkandBreakTime,
  totalSeconds,
  settotalSeconds,
}) {
  const [seconds, setseconds] = useState(0);
  const totalMinutes = totalSeconds / 60;

  const play = () => {
    let intervalId = setInterval(decreaseSeconds(), 1000);
  };

  const decreaseSeconds = () => {
    if (totalSeconds != 0) {
      totalMinutes = totalSeconds / 60;
      if (seconds === 0) {
        seconds = 59;
      } else {
        setseconds(seconds - 1);
        settotalSeconds(totalSeconds - 1);
      }
    } else if (totalSeconds === 0) {
      toggleSession();
    }
  };

  return (
    <View>
      <View style={styles.takeinput}>
        <View style={styles.workTime}>
          <Text>Work length</Text>
          <TextInput value={workTime.toString()} onChangeText={setworkTime} />
        </View>
        <View style={styles.breakTime}>
          <Text>Break length</Text>
          <TextInput value={breakTime.toString()} onChangeText={setbreakTime} />
        </View>
      </View>
      <TouchableOpacity onPress={setWorkandBreakTime}>
        <View style={styles.submitbutton}>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.eventText}>
        <Text>Time to do some work!</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timertext}>
          {totalMinutes}:
          {seconds ? '0' : seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Button text="Play" play={play} />
        </View>
        <View>
          <Button text="Stop" />
        </View>
        <View>
          <Button text="Reset" />
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
  submitbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2c2a3',
    height: 40,
    borderRadius: 8,
  },
});
