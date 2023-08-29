import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>
            Author:
            {' '}
            {book.author}
          </p>
          <p>
            Category:
            {' '}
            {book.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
