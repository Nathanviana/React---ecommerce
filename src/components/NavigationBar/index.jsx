import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import './styles.css'; // Importando o CSS

function NavigationBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <div className="brand">
          <Link to="/">E-Commerce</Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link login-btn">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
