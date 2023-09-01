import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
