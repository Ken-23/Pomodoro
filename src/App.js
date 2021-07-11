import React, {useState, useEffect, Children} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(1);
  const [breakTime, setbreakTime] = useState(2);
  const [isRunning, setisRunning] = useState(false);
  const [isworkTime, setisworkTime] = useState(true);
  const [isbreakTime, setisbreakTime] = useState(false);
  const [time, settime] = useState({mins: workTime, secs: 0});
  const [temp, setTemp] = useState({count: workTime});
  const [title, setTitle] = useState('Time to do some work!');

  function play() {
    if (isRunning) {
      return;
    }
    setisRunning(true);
  }

  useEffect(() => {
    if (temp.count < 0) {
      if (isbreakTime) {
        settime({...time, mins: breakTime, secs: 0});
        setTemp({...temp, count: breakTime});
        setTitle('Relax TIme!');
      } else {
        settime({...time, mins: workTime, secs: 0});
        setTemp({...temp, count: workTime});
        setTitle('Time to do some work!');
      }
    }
    if (isRunning) {
      const timerId = setInterval(() => {
        if (time.secs <= 0) {
          if (time.mins <= 0) {
            setisbreakTime(!isbreakTime);
            setTemp({...temp, count: temp.count - 1});
          } else {
            settime({...time, mins: time.mins - 1, secs: 59});
            setTemp({...temp, count: temp.count - 1});
          }
        } else {
          settime({...time, mins: time.mins, secs: time.secs - 1});
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time, isRunning, temp]);

  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        setworkTime={setworkTime}
        setbreakTime={setbreakTime}
        play={play}
        time={time}
        title={title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    height: '100%',
    backgroundColor: '#e5e5cc',
  },
});
