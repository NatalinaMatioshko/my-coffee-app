import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header>
      <Container>
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
      </Container>
    </header>
  );
};

export default Header;
