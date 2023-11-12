import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './sclices/booksSlice';
import filterReducer from './sclices/filterSlice';
import errorReducer from './sclices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
