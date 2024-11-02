import './login.css'

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
                <p className="loginsignup-login">não tem uma conta? <span>registre-se aqui</span></p>
            </div>
        </div>
    )
}

export default Login