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
      <div className="book-info-div">
        <div>
          <p className="p-top">
            {category}
          </p>
        </div>
        <div>
          <h3>
            {title}
          </h3>
        </div>
        <div>
          <p>
            {author}
          </p>
        </div>
        <div className="btn-div">
          <button className="btn-one" type="button">
            Comment
          </button>
          <button className="btn-one" type="button" onClick={handleRemoveClick}>
            Remove
          </button>
          <button type="button">
            Edit
          </button>
        </div>

      </div>
      <div className="progress-bar">
        <div>
          <div className="outer-circle">
            <div className="progress-strip" />
            <div className="inner-circle" />
          </div>
        </div>
        <div>
          <h1>64%</h1>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button className="upd-btn" type="button">UPDATE PROGRESS</button>
      </div>
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
