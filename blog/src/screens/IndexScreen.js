import React, { useContext, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={
              () => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.blogRow}>
                <Text style={styles.blogTitle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.trashImage} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
      >
        <Feather
          name="plus"
          size={30}
          style={styles.plusIcon}
        />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  blogRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  blogTitle: {
    fontSize: 18,
  },
  trashImage: {
    fontSize: 24,
  },
  plusIcon: {
    marginRight: 10,
  },
});


export default IndexScreen; 