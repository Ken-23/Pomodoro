import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [worktime, setworktime] = useState(25);
  const [breaktime, setbreaktime] = useState(5);
  const [isSesssion, setisSession] = useState(true);
  const [relaxtime, setrelaxtime] = useState(false);
  const timerSecond = 0;
  const timerMinute = worktime;

  const setworkandbreaktime = () => {
    if (isNaN(worktime) || isNaN(breaktime)) {
      alert('Please enter numbers only');
      if (isNaN(worktime)) {
        setworktime('');
      }
      if (isNaN(breaktime)) {
        setbreaktime('');
      }
    } else {
      setworktime(worktime);
      setbreaktime(breaktime);
    }
  };
  function onUpdatetimeinterval () {
    return(
      timerMinute : worktime - 1;
    )
  }
  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        timerMinute={timerMinute}
        timerSecond={timerSecond}
        setworktime={setworktime}
        breaktime={breaktime}
        setbreaktime={setbreaktime}
        setworkandbreaktime={setworkandbreaktime}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    height: '100%',
  },
});
