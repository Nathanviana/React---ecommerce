import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import "./styles.css"; // Importando o CSS
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
						<Link className="nav-link local-btn">
						<i class="bi bi-geo-alt"></i>
						<div class="cep-container">
							<div className="texto-local">
								<span>Digite seu</span>
								<span>CEP</span>
							</div>
						</div>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link login-btn">
						<i class="bi bi-person-circle"></i>
							<div className="texto-login">
								<span>Faça</span>
								<span>Login</span>
							</div>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/carrinho" className="nav-link carrinho-container2">
						<i class="bi bi-cart4"></i>
							<div className="texto-carrinho">
								<span>Seu</span>
								<span>Carrinho</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavigationBar;
