import Navigation from './Navigation';
import BookList from './BookList';
import BookActions from './BookActions';
import '../App.css';

const Home = () => (
  <div className="page">
    <div className="page-nav">
      <h2>Bookstore CMS</h2>
      <Navigation />
    </div>
    <BookList />
    <BookActions />
  </div>
);

export default Home;
