import { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const navigate = useNavigate();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await axios.get("http://localhost:3000/clientes", {
				params: { email, senha },
			});

			if (response.data.length > 0) {
				const userData = response.data[0];
				localStorage.setItem("user", JSON.stringify(userData));
				navigate("/");
			} else {
				alert("Credenciais inválidas");
			}
		} catch (error) {
			console.error("Erro ao fazer login:", error);
			alert("Ocorreu um erro ao fazer login");
		}
	}
	return (
		<div className="main-bg">
			<div className="d-flex justify-content-center align-items-center vh-100">
				<div
					className="card p-4 shadow"
					style={{ width: "400px", borderRadius: "10px" }}
				>
					<h3 className="text-2xl font-bold text-center mb-6">Login</h3>
					<form
						onSubmit={handleLogin}
						className="flex items-center flex-col space-y-2"
					>
						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
								placeholder="Email"
							/>
						</div>
						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<input
								type="password"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
								placeholder="Senha"
							/>
						</div>
						<button
							type="submit"
							className="inline-flex items-center justify-center px-5 py-2.5 m-3 bg-gray-800 text-white text-sm font-medium rounded-md shadow transition duration-200 hover:bg-gray-900 hover:shadow-md focus:ring-4 focus:ring-gray-300 focus:outline-none w-full !mt-5 !text-base !rounded-full"
						>
							Entrar
						</button>
						<p className="loginsignup-login md-3">
							não tem uma conta?{" "}
							<Link to="/cadastro" className="signup-link">
								registre-se aqui
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
