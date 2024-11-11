import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import "./styles.css"; // Importando o CSS
import cart from "../../assets/icons/cart.svg";
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
						<Link to="/produtos" className="nav-link">
							Produtos
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link login-btn">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/carrinho">
							<img width={40} src={cart} alt="" />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavigationBar;
