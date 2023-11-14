import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from './errorSlice';
import createBookWithId from '../../utils/createBookWithId';

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      // const index = state.findIndex((book) => book.id === action.payload);
      // if (index !== -1)
      //   state.splice(index, 1);

      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });

      // return state.map((book) =>
      //   book.id === action.payload
      //     ? { ...book, isFavorite: !book.isFavorite }
      //     : book
      // );
    },
  },
  // Option 1
  // extraReducers: {
  //   [fetchBook.fulfilled]: (state, action) => {
  //     if (action.payload.title && action.payload.author)
  //       state.push(createBookWithId(action.payload, 'API'));
  //   },
  // },
  // Option 2
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author)
        state.push(createBookWithId(action.payload, 'API'));
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
