import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  subHeaderStyle: {
    fontSize: 20,
  }
});

const ComponentsScreen = () => {
  const greeting = 'FFF';

  return (
    <View>
      <Text style={styles.textStyle}>Teste maluco</Text>
      <Text style={styles.subHeaderStyle}>Teste {greeting}</Text>
    </View>
  );
};

export default ComponentsScreen;