// import React from 'react'
import './login-cadastro.css'
import { Link } from 'react-router-dom'

const Cadastro = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
               <h1>Registre-se</h1> 
               <div className="loginsignup-fields">
                    <input type="text" placeholder='Nome' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
               </div>
                <button>continue</button>
                <p className="loginsignup-login">já tem uma conta? <Link to="/login" className="signup-link">Entrar aqui</Link></p>
            </div>
        </div>
    )
}


export default Cadastro