// import React from 'react'
import { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
	const [clientName, setClientName] = useState("");
	const [clientEmail, setClientEmail] = useState("");
	const [clientSenha, setClientSenha] = useState("");
	const [message, setMessage] = useState(null);
	const [messageType, setMessageType] = useState("");
	const navigate = useNavigate();

	async function createAccount(e) {
		e.preventDefault();

		try {
			const api = await axios.get("http://localhost:3000/clientes");
			const client_Exists = api.data.filter(
				(client) => client.email === clientEmail,
			).length;

			if (!client_Exists) {
				const newClients = {
					name: clientName,
					email: clientEmail,
					senha: clientSenha,
				};
				await axios.post("http://localhost:3000/clientes", newClients);

				setMessage("Conta criada com sucesso");
				setMessageType("success");
				setTimeout(() => navigate("/login"), 2000);

				setClientEmail("");
				setClientName("");
				setClientSenha("");

			} else {
				setMessage("Email já cadastrado");
				setMessageType("error");
			}
		} catch (error) {
			console.log(error);
			setMessage("Erro ao criar conta");
			setMessageType("error");
		}
	}

	return (
		<div className="main-bg">
			<div className="d-flex justify-content-center align-items-center vh-100">
				<div
					className="card p-4 shadow"
					style={{ width: "400px", borderRadius: "10px" }}
				>
					<h3 className="text-2xl font-bold text-center mb-6">Registrar-se</h3>
					{message && (
						<div
							className={`${
								messageType === "success" ? "bg-green-100" : "bg-red-100 border-red-400 text-red-700"
							} p-2 text-center text-sm text-gray-600 rounded-md mb-2`}
						>
							{message}
						</div>
					)}
					<form
						onSubmit={createAccount}
						method="post"
						className="flex items-center flex-col space-y-2"
					>
						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<input
								type="text"
								value={clientName}
								onChange={(e) => setClientName(e.target.value)}
								className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
								placeholder="Nome Completo"
								required
							/>
						</div>
						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<input
								type="email"
								value={clientEmail}
								onChange={(e) => setClientEmail(e.target.value)}
								className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
								placeholder="Email"
								required
							/>
						</div>
						<div className="w-full flex items-center relative mx-0 md:mx-3">
							<input
								type="password"
								value={clientSenha}
								onChange={(e) => setClientSenha(e.target.value)}
								className="w-full min-w-56 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring focus:ring-gray-300 pl-10"
								placeholder="Senha"
								required
							/>
						</div>
						<button
							type="submit"
							className="inline-flex items-center justify-center px-5 py-2.5 m-3 bg-gray-800 text-white text-sm font-medium rounded-md shadow transition duration-200 hover:bg-gray-900 hover:shadow-md focus:ring-4 focus:ring-gray-300 focus:outline-none w-full !mt-5 !text-base !rounded-full"
						>
							Registrar
						</button>
						<p className="loginsignup-login">
							já tem uma conta?{" "}
							<Link to="/login" className="signup-link">
								Entrar aqui
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;
