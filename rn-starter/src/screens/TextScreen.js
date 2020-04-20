import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const validatePassword = (checkPass, password) => {
  if (password.length === 0) {
    return null;
  }
  let validated = '';

  validated = checkPass ?  'Password ok!': 'Password must have at least 5 characters.';

  return (
  <Text>{validated}</Text>
  );
};

const TextScreen = () => {
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState(false);

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          newValue.length >= 5 ? setCheckPass(true) : setCheckPass(false);
          setPassword(newValue)
        }}
      />
      {validatePassword(checkPass, password)}
    </View>
  );
};

export default TextScreen;