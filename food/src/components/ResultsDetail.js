import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.resultContainer}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.resultImage}
      />
      <Text style={styles.resultName}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginLeft: 15,
  },
  resultImage: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  resultName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ResultsDetail; 