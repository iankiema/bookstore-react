import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div>
        <h3>
          <span>Book title :</span>
          {title}
        </h3>
      </div>
      <div>
        <p>
          <span>Author :</span>
          {author}
        </p>
      </div>
      <div>
        <p className="input">
          <span>Category :</span>
          {category}
        </p>
      </div>
      <button type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
