import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    marginBottom: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default withNavigation(ResultsList); 