import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const styles = StyleSheet.create({
  randomColorView: {
    width: 100,
    height: 100,
  },
});

const ColorScren = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={[styles.randomColorView, { backgroundColor: item }]}/>
          )
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScren;