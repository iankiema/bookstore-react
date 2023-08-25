import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (
  <div className="book">
    <h3>{book.title}</h3>
    <p className="book-author">
      Author:
      {book.author}
    </p>
    <button type="button" className="book-delete-button" onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
