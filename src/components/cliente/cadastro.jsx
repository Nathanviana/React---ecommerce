// import React from 'react'
import "./login-cadastro.css"
import { Link } from 'react-router-dom'

const Cadastro = () => {
    return (
        <div className="main-bg">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
          <h3 className="text-2xl font-bold text-center mb-6">Registrar-se</h3>
          <form className="flex items-center flex-col space-y-2">
            <div className="w-full flex items-center relative mx-0 md:mx-3">
              <input
                type="text"
                className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
                placeholder="Nome Completo"
              />
            </div>
            <div className="w-full flex items-center relative mx-0 md:mx-3">
              <input
                type="email"
                className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex items-center relative mx-0 md:mx-3">
              <input
                type="password"
                className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
                placeholder="Senha"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-2.5 m-3 bg-gray-800 text-white text-sm font-medium rounded-md shadow transition duration-200 hover:bg-gray-900 hover:shadow-md focus:ring-4 focus:ring-gray-300 focus:outline-none w-full !mt-5 !text-base !rounded-full"
            >
              Registrar
            </button>
            <p className="loginsignup-login">já tem uma conta? <Link to="/login" className="signup-link">Entrar aqui</Link></p>
          </form>
        </div>
      </div>
    </div>
    )
}


export default Cadastro