import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, thunkFunction } from '../../redux/sclices/booksSlice';
import booksData from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmith = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')));
      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    dispatch(addBook(createBookWithId(randomBook, 'random')));
  };

  const handleAddRandomViaAPI = () => {
    dispatch(thunkFunction);
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmith}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submith">Add Book</button>
          <button type="button" onClick={handleAddRandomBook}>
            Add Random
          </button>
          <button type="button" onClick={handleAddRandomViaAPI}>
            Add Random via API
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
