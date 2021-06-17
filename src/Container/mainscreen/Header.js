import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({header}) {
  return (
    <View style={styles.mainheading}>
      <Text style={styles.mainheadingText}>{header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainheading: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2c2a3',
  },
  mainheadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d3d29',
  },
});
