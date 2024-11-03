import './login-cadastro.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Entrar</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                </div>
                <button>continue</button>
                <p className="loginsignup-login">não tem uma conta? <Link to="/cadastro" className="signup-link"> registre-se aqui</Link></p>
            </div>
        </div>
    )
}

export default Login