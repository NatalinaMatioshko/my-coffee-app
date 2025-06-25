import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="">Bean Scene</a>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/profile">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/product">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
