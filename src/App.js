import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(25);
  const [breakTime, setbreakTime] = useState(5);
  const [isRunning, setisRunning] = useState(false);
  const [isbreakTime, setisbreakTime] = useState(false);
  const [time, settime] = useState({mins: workTime, secs: 0});
  const [count, setCount] = useState({count: workTime});
  const [title, setTitle] = useState('Time to do some Work!');
  const [label, setLabel] = useState('Play');

  function PlayandStop() {
    if (isRunning) {
      setLabel('Play');
    } else {
      setLabel('Stop');
    }
    setisRunning(!isRunning);
  }

  function SetTime() {
    if (isRunning == false) {
      settime({...time, mins: workTime, secs: 0});
    }
  }

  function Reset() {
    settime({...time, mins: 25, secs: 0});
    setCount({...count, count: 25});
    setisRunning(false);
    setLabel('Play');
    setTitle('Time to do some Work!');
  }

  useEffect(() => {
    if (count.count < 0) {
      if (isbreakTime) {
        settime({...time, mins: breakTime, secs: 0});
        setCount({...count, count: breakTime});
        setTitle('Relax TIme!');
      } else {
        settime({...time, mins: workTime, secs: 0});
        setCount({...count, count: workTime});
        setTitle('Time to do some work!');
      }
    }
    if (isRunning) {
      const timerId = setInterval(() => {
        if (time.secs <= 0) {
          if (time.mins <= 0) {
            setisbreakTime(!isbreakTime);
            setCount({...count, count: count.count - 1});
          } else {
            settime({...time, mins: time.mins - 1, secs: 59});
            setCount({...count, count: count.count - 1});
          }
        } else {
          settime({...time, mins: time.mins, secs: time.secs - 1});
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time, isRunning, count]);

  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        setworkTime={setworkTime}
        setbreakTime={setbreakTime}
        isRunning={isRunning}
        time={time}
        title={title}
        Play={PlayandStop}
        Reset={Reset}
        label={label}
        SetTime={SetTime}
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
