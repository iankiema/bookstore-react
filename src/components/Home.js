import React, { useState } from 'react';
import Navigation from './Navigation';
import BookList from './BookList';
import BookForm from './BookForm';
import '../App.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div className="page">
      <div className="page-nav">
        <h2>Bookstore CMS</h2>
        <Navigation />
      </div>

      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Home;
