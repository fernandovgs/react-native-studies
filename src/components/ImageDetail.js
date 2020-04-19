import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  imageDimensions: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
});

const ImageDetail = ({ title, source, score }) => {
  return (
    <View>
      <Image source={source} style={styles.imageDimensions} />
      <Text>{title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

export default ImageDetail;