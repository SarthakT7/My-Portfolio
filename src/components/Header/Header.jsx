import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list ">
          <li className="navbar__item">
            <Link to="/" className="navbar__link hover-underline-animation">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link hover-underline-animation">
               About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/resume" className="navbar__link hover-underline-animation">
              Resume
            </Link>
          </li>

          <li className="navbar__item">
            <Link to="/contact" className="navbar__link hover-underline-animation">
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Header;
