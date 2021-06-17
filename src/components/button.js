import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button({text}) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 13,
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#c2c2a3',
  },
});
