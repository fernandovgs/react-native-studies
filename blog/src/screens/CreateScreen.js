import React, { useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen  = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const submitForm = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'));
  };

  return (
    <BlogPostForm
      navigation={navigation}
      onSubmit={submitForm}
    />
  );
};

const styles = StyleSheet.create({

});

export default CreateScreen; 