import Navigation from './Navigation';
import BookList from './BookList';
import '../App.css';

const Home = () => (
  <div className="page">
    <div className="page-nav">
      <h2>Bookstore CMS</h2>
      <Navigation />
    </div>
    <BookList />
  </div>
);

export default Home;
