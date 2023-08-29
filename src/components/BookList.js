// BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <div className="book" key={book.item_id}>
          <h3>{book.title}</h3>
          <p className="book-author">
            Author:
            {' '}
            {book.author}
          </p>
          <p>
            Category:
            {' '}
            {book.category}
          </p>
          <button className="book-delete-button" type="button" onClick={() => handleRemoveBook(book.item_id)}>
            Remove Book
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
