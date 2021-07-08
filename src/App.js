import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [worktime, setworktime] = useState(25);
  const [breaktime, setbreaktime] = useState(5);
  const [isRunning, setisRunning] = useState(false);
  const [totalSeconds, settotalSeconds] = useState({mint: 0, secs: 0});

  function play() {
    if (isRunning) {
      return;
    }
    setisRunning(true);
    settotalSeconds({secs: worktime * 60});
    console.log(totalSeconds.secs);
    decreaseTimer();
  }

  function decreaseTimer() {}
  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        setworktime={setworktime}
        setbreaktime={setbreaktime}
        play={play}
        totalSeconds={totalSeconds}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    height: '100%',
  },
});
