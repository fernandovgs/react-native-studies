import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const styles = StyleSheet.create({

});

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Café"
        source={require('../../assets/cafe.jpeg')}
        score={9}
      />
      <ImageDetail
        title="Chimarrão"
        source={require('../../assets/chimarrao.jpeg')}
        score={10}
      />
      <ImageDetail
        title="Shimbalaiê"
        source={require('../../assets/shimbalaie.jpeg')}
        score={11}
      />
      <ImageDetail
        title="Sky"
        source={require('../../assets/sky.png')}
        score={12}
      />
    </View>
  );
};

export default ImageScreen;