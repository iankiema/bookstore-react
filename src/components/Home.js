import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'New Book Title',
      author: 'New Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
            {' '}
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default Home;
