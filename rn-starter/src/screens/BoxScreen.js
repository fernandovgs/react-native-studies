import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainerOne: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
  },
  subContainerTwo: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    marginTop: 50,
  },
  subContainerThree: {
    backgroundColor: 'purple',
    width: 50,
    height: 50,
  },
});

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerOne}/>
      <View style={styles.subContainerTwo}/>
      <View style={styles.subContainerThree}/>
    </View>
  );
};

export default BoxScreen;
