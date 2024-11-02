// import React from 'react'
import './cadastro.css'

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
                <p className="loginsignup-login">já tem uma conta? <span>entrar aqui</span></p>
            </div>
        </div>
    )
}


export default Cadastro