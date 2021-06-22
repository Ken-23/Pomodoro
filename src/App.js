import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from './Container/mainscreen/Header';
import Pomodoro from './Container/mainscreen/pomodoro';

export default function App() {
  const header = 'Pomodoro Timer';
  const [workTime, setworkTime] = useState(25);
  const [breakTime, setbreakTime] = useState(5);
  const [isWorkSession, setisWorkSession] = useState(true);
  const [isRelaxSession, setisRelaxSession] = useState(false);
  const [totalSeconds, settotalSeconds] = useState(workTime * 60);

  const setWorkandBreakTime = () => {
    if (isNaN(workTime) || isNaN(breakTime)) {
      alert('Please enter numbers only');
      if (isNaN(workTime)) {
        setworkTime('');
      }
      if (isNaN(breakTime)) {
        setbreakTime('');
      }
    } else {
      alert('Success');
    }
  };

  function toggleSession() {
    if (isWorkSession) {
      settotalSeconds(breakTime * 60);
      setisWorkSession(false);
    } else {
      settotalSeconds(workTime * 60);
      setisWorkSession(true);
    }
  }
  return (
    <SafeAreaView style={styles.mainscreen}>
      <Header header={header} />
      <Pomodoro
        totalSeconds={totalSeconds}
        workTime={workTime}
        setworkTime={setworkTime}
        breakTime={breakTime}
        setbreakTime={setbreakTime}
        isWorkSession={isWorkSession}
        isRelaxSession={isRelaxSession}
        setWorkandBreakTime={setWorkandBreakTime}
        settotalSeconds={settotalSeconds}
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
