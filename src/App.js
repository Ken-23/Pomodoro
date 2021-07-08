import React, {useState, useEffect, Children} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(25);
  const [breakTime, setbreakTime] = useState(5);
  const [isRunning, setisRunning] = useState(false);
  const [isbreakTime, setisbreakTime] = useState(false);
  const [time, settime] = useState({mins: 1, secs: 0});

  let seconds = workTime * 60;

  function play() {
    if (isRunning) {
      return;
    }
    setisRunning(true);
  }

  useEffect(() => {
    if (time.mins < 0) {
      console.log('finsi');
      return;
    }
    if (isRunning) {
      const timerId = setInterval(() => {
        settime({...time, mins: seconds / 60});
        if (time.secs <= 0) {
          if (time.mins <= 0) {
            /* alert('Timer Ended'); */
            console.log('ended');
          } else {
            settime({...time, mins: time.mins - 1, secs: 59});
          }
        } else {
          settime({...time, mins: time.mins, secs: time.secs - 1});
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time, isRunning]);

  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        setworkTime={setworkTime}
        setbreakTime={setbreakTime}
        play={play}
        time={time}
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
