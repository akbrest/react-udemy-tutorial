import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import { v4 as uuidv4 } from 'uuid';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmith = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = {
        title: title,
        author: author,
        id: uuidv4(),
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  const handleAdRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithId = {
      ...randomBook,
      id: uuidv4(),
    };

    dispatch(addBook(randomBookWithId));
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
          <button type="button" onClick={handleAdRandomBook}>
            Add Random
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
