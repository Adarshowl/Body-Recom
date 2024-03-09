import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Workout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Set text color
  },
});

export default Workout;
