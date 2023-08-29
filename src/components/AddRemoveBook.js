import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

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

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <button type="button" onClick={handleAddBook}>Add Book</button>
      <button type="button" onClick={() => handleRemoveBook('item1')}>Remove Book</button>
    </div>
  );
};

export default BookActions;
