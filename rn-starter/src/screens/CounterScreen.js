import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({

});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;