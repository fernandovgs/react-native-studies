import React, { useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === id
  );

  const submitForm = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop());
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      navigation={navigation}
      onSubmit={submitForm}
    />
  );
};

const styles = StyleSheet.create({

});

export default EditScreen; 
