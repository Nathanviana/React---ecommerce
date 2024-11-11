import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cadastro from "./pages/Cadastro";
import CadastroProduto from "./pages/CadastroProduto";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./globalStyles.css"; // Caso haja estilos globais
import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos";
function Routers() {
	return (
		<Router>
			{" "}
			{/* Envolvendo a aplicação com o Router */}
			<NavigationBar /> {/* Exibindo a barra de navegação */}
			<Routes>
				{" "}
				{/* Definindo as rotas */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/produtos" element={<Produtos />} />
				<Route path="/cadastro-produto" element={<CadastroProduto />} />
				<Route path="/carrinho" element={<Carrinho />} />
				<Route path="/pedidos" element={<Pedidos />} />
			</Routes>
			<Footer /> {/* Exibindo o rodapé */}
		</Router>
	);
}

export default Routers;
