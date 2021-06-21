import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [worktime, setworktime] = useState(25);
  const [breaktime, setbreaktime] = useState(5);
  const isSession = true;
  const relaxtime = false;
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

  const decreaseTimeminute = () => {
    return {
      timerMinute: timerMinute - 1,
    };
  };

  function toggleSession(isSession) {
    if (isSession) {
      timerMinute: worktime;
    } else {
      timerMinute: breaktime;
    }
    console.log(timerMinute);
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
        decreaseTimeminute={decreaseTimeminute}
        toggleSession={toggleSession}
        isSession={isSession}
        relaxtime={relaxtime}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    height: '100%',
  },
});
