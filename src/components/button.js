import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button({text, play}) {
  return (
    <TouchableOpacity onPress={play}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 13,
    marginRight: 13,
<<<<<<< HEAD
    width: 70,
=======
    width: 60,
>>>>>>> 7ccab8a71dab808aeba6bd65af8857b99f2b87dc
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#c2c2a3',
  },
});
