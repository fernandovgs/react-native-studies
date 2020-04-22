import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delBlogPost':
      return state
        .filter((blogPost) => blogPost.id !== action.payload);
    case 'editBlogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost 
      });
    case 'getBlogPosts':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'getBlogPosts', payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts', { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    const response = await jsonServer.delete(`/blogposts/${id}`);

    dispatch({
      type: 'delBlogPost',
      payload: { id }
    });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    const response =
      await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: 'editBlogPost',
      payload: { id, title, content }
    });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
