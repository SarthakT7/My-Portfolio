import "./Header.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineContacts,
} from "react-icons/ai";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list ">
          <li className="navbar__item">
            <Link to="/" className="navbar__link hover-underline-animation">
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about"
              className="navbar__link hover-underline-animation"
            >
              <AiOutlineUser /> About
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/resume"
              className="navbar__link hover-underline-animation"
            >
              <AiOutlineFile /> Resume
            </Link>
          </li>

          <li className="navbar__item">
            <Link
              to="/contact"
              className="navbar__link hover-underline-animation"
            >
              <AiOutlineContacts /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
