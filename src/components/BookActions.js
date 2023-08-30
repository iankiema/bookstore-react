// BookActions.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookActions = () => {
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

  return (
    <div>
      <button className="book-form-button" type="button" onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookActions;
