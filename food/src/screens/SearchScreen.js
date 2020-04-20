import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <Text style={styles.resultsText}>We have found {results.length} results.</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Big Pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
        <ResultsList
          results={results}
          title="All results"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginLeft: 15,
  },
  resultsText: {
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default SearchScreen; 