import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-book"></i> Online Library
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link">
              Browse Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-book" className="nav-link">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;