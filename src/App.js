import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(25);
  const [breakTime, setbreakTime] = useState(5);
  const [isBreakTime, setisBreakTime] = useState(true);
  const [isRunning, setisRunning] = useState(false);
  const [TotalSeconds, setTotalSeconds] = useState(workTime * 60);
  const [copyTime, setCopyTime] = useState(TotalSeconds);
  const [title, setTitle] = useState('Play');

  function play() {
    if (isRunning) {
      setTitle('Play');
    } else {
      if (workTime * 60 != copyTime) {
        setTotalSeconds(workTime * 60);
        setCopyTime(workTime * 60);
      }
      setTitle('Stop');
    }
    setisRunning(!isRunning);
  }

  function reset() {
    setisRunning(false);
    setTotalSeconds(25 * 60);
  }
  console.log(workTime * 60, 'worktime');
  console.log(TotalSeconds, 'totalseconds');
  console.log(copyTime, 'Copytime');

  useEffect(() => {
    if (TotalSeconds == 0) {
      setisBreakTime(!isBreakTime);
      if (isBreakTime) {
        setTotalSeconds(breakTime * 60);
      } else {
        setTotalSeconds(workTime * 60);
      }
    }
    if (isRunning) {
      const timerId = setInterval(() => {
        setTotalSeconds(TotalSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [isRunning, TotalSeconds]);

  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        setworkTime={setworkTime}
        setbreakTime={setbreakTime}
        play={play}
        reset={reset}
        TotalSeconds={TotalSeconds}
        title={title}
      />
    </SafeAreaView>
  );
}
7;

const styles = StyleSheet.create({
  mainscreen: {
    height: '100%',
    backgroundColor: '#e5e5cc',
  },
});
