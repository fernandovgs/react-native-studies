import React, { useContext, useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button
} from 'react-native';

import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
    <View>
          <Text style={styles.text}>Enter title:</Text>
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={text => setTitle(text)} 
          />
          <Text style={styles.text}>Enter content</Text>
          <TextInput
            style={styles.contentInput}
            value={content}
            onChangeText={text => setContent(text)}
          />
          <View style={styles.formButton}>
            <Button
              title="Save blog post"
              onPress={() => onSubmit(title, content)}
            />
          </View>
        </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  contentInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    height: 200,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  formButton: {
    width: 200,
    alignSelf: 'center',
  },
});

export default BlogPostForm; 
