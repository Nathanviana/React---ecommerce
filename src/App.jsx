// import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/cliente/cadastro";
import Login from "./components/cliente/login";
import ProductList from "./components/produtos/ProductList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lista" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;