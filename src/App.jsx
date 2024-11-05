import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/cliente/cadastro";
import Login from "./components/cliente/login";
import ProductList from "./components/produtos/ProductList";
import NavBar from "./components/shared/NavBar/NavBar";
import Home from "./pages/home/Home";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lista" element={<ProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;