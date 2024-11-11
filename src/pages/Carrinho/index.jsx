import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Carrinho() {
	const [payType, setPayType] = useState("");
	const [carrinho, setCarrinho] = useState([]);
	const [cliente, setCliente] = useState(null);
	("	");
	useEffect(() => {
		const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
		setCarrinho(carrinhoSalvo);

		const clienteLogado = JSON.parse(localStorage.getItem("user"));
		setCliente(clienteLogado);
	}, []);

	const calcularTotal = () => {
		return carrinho.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	};

	const aumentarQuantidade = (id) => {
		const novoCarrinho = carrinho.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: Number(item.quantity) + 1 };
			}
			return item;
		});
		setCarrinho(novoCarrinho);
		localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
	};

	const diminuirQuantidade = (id) => {
		const novoCarrinho = carrinho.map((item) => {
			if (item.id === id) {
				if (item.quantity > 1) {
					return { ...item, quantity: Number(item.quantity) - 1 };
				}
				return null;
			}
			return item;
		});

		const carrinhoAtualizado = novoCarrinho.filter((item) => item !== null);

		setCarrinho(carrinhoAtualizado);
		localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
	};
	const handlePayTypeChange = (event) => {
		setPayType(event.target.value); // Atualiza o estado com o valor selecionado
	};

	const confirmarCompra = async () => {
		if (!carrinho.length) {
			alert("Acrescente produtos ao carrinho para comprar");
			return;
		}
		if (!payType) {
			alert("Por favor, selecione um método de pagamento.");
			return;
		}
		const pedidos = []

		pedidos.push({
			clienteName: cliente.name,
			paymentMethod: payType,
			products: carrinho,
			total: calcularTotal(),
		});
		await axios.post("http://localhost:3000/pedidos", ...pedidos);
		console.log(pedidos);

		setCarrinho([]);
		localStorage.removeItem("carrinho");
	};

	return (
		<div>
			<Link to="/">Voltar</Link>

			<div className="pedidos-container">
				<div className="pedidos-lado-esquerdo">
					<h2>Itens Selecionados</h2>
					{carrinho.length > 0 ? (
						<div className="itens-selecionados">
							{carrinho.map((produto) => (
								<div key={produto.id} className="produto-selecionado">
									<img
										src={produto.img}
										alt={produto.name}
										className="imagem-produto"
									/>
									<div className="info-produto">
										<p>
											<strong>Nome:</strong> {produto.name}
										</p>
										<p>
											<strong>Preço:</strong> R${produto.price}
										</p>
										<p>
											<strong>Quantidade:</strong> {produto.quantity}
										</p>
										<div className="botoes-quantidade">
											<button
												type="button"
												onClick={() => diminuirQuantidade(produto.id)}
											>
												-
											</button>
											<button
												type="button"
												onClick={() => aumentarQuantidade(produto.id)}
											>
												+
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<p>Seu carrinho está vazio!</p>
					)}
				</div>

				<div className="carrinho-container">
					<h2>Carrinho</h2>
					{carrinho.length > 0 ? (
						<table className="carrinho-tabela">
							<thead>
								<tr>
									<th>Produto</th>
									<th>Quantidade</th>
									<th>Preço</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{carrinho.map((produto) => (
									<tr key={produto.id}>
										<td>{produto.name}</td>
										<td>{produto.quantity}</td>
										<td>R${produto.price}</td>
										<td>R${produto.price * produto.quantity}</td>
									</tr>
								))}
								<tr>
									<td colSpan="3">
										<strong>Total</strong>
									</td>
									<td>
										<strong>R${calcularTotal()}</strong>
									</td>
								</tr>
							</tbody>
						</table>
					) : (
						<p>Seu carrinho está vazio!</p>
					)}

					<div className="confirmacao-compra">
						<h3>Confirmação de Compra</h3>
						{cliente ? (
							<div>
								<p>
									<strong>Cliente:</strong> {cliente.name}
								</p>
								<p>
									<strong>Total:</strong> R${calcularTotal()}
								</p>
								<p style={{ display: "flex", alignItems: "center", gap: 10 }}>
									<label>
										<input
											type="radio"
											name="payType"
											value="pix"
											checked={payType === "pix"}
											onChange={handlePayTypeChange}
										/>
										Pix
									</label>
									<label>
										<input
											type="radio"
											name="payType"
											value="credito"
											checked={payType === "credito"}
											onChange={handlePayTypeChange}
										/>
										Crédito
									</label>
									<label>
										<input
											type="radio"
											name="payType"
											value="debito"
											checked={payType === "debito"}
											onChange={handlePayTypeChange}
										/>
										Débito
									</label>
									<label>
										<input
											type="radio"
											name="payType"
											value="boleto"
											checked={payType === "boleto"}
											onChange={handlePayTypeChange}
										/>
										Boleto
									</label>
								</p>
								<button
									className="btn-confirmar"
									type="button"
									onClick={confirmarCompra}
								>
									Confirmar Compra
								</button>
							</div>
						) : (
							<p>Você precisa estar logado para fazer a compra.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
