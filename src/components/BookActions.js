import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../App.css';

const BookActions = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook({
      item_id: id,
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categories = [
    'Action', 'Fiction', 'Thriller', 'Mystery', 'Adventure', 'Biography', 'Anthology', 'Other',
  ];

  return (
    <div className="book-actions">
      <div className="book-actions-title">
        <h1>ADD NEW BOOK</h1>
      </div>
      <form className="book-form" onSubmit={handleFormSubmit}>
        <input className="input" type="text" placeholder="Book title" value={title} onChange={handleTitleChange} required />
        <input className="input" type="text" placeholder="Author" value={author} onChange={handleAuthorChange} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>

  );
};

export default BookActions;
