import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import yelp from '../api/yelp';

const ResultsShow = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.resultImages} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultImages: {
    height: 200,
    width: 300,
  }
});

export default ResultsShow; 
