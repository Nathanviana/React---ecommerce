import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import ProductList from "./components/produtos/ProductList";
import CadastroProduto from "./pages/CadastroProduto";
import Home from "./pages/Home";
import './globalStyles.css';  // Caso haja estilos globais

function Routers() {
  return (
    <Router> {/* Envolvendo a aplicação com o Router */}
      <NavigationBar /> {/* Exibindo a barra de navegação */}
      
      <Routes> {/* Definindo as rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista" element={<ProductList />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
      </Routes>

      <Footer /> {/* Exibindo o rodapé */}
    </Router>
  );
}

export default Routers;
