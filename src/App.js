import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(25);
  const [breakTime, setbreakTime] = useState(5);
  const [isRunning, setisRunning] = useState(false);

  function play() {
    if (isRunning) {
      return;
    }
    setisRunning(true);
    Timer();
  }
  function Timer() {
    const [time, settime] = useState({mins: 0, secs: 0});
    const [totalSeconds, settotalSeconds] = useState(workTime * 60);
    useEffect(() => {
      if (time.mins < 0) {
        if (timerId) {
          clearInterval(timerId);
        }
        return;
      }

      const timerId = setInterval(() => {
        secondsdecrease();
      }, 1000);
      function secondsdecrease() {
        settime({...time, mins: Math.floor(totalSeconds / 60)});
        settime({
          ...time,
          secs: Math.floor(totalSeconds - time.mins * 60),
        });
        if (time.secs <= 0) {
          if (time.mins <= 0) {
            alert('Timer ended');
          } else {
            settime({...time, mins: time.mins - 1, secs: 59});
          }
        } else {
          settime({...time, mins: time.mins, secs: time.secs - 1});
          console.log(time.mins);
        }
      }
      return () => clearInterval(timerId);
    }, [time]);
  }
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
