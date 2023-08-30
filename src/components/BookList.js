// BookList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const dispatch = useDispatch();

  const appId = 'abc123';

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks(appId));
    }
  }, [status, dispatch, appId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.keys(books).map((item_id) => (
        <div className="book" key={item_id}>
          {books[item_id].map(book) => (
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
          )}
        </div>

      ))}
    </div>
  );
};

export default BookList;
