import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css'

export default function Pedidos() {
	const [pedidos, setPedidos] = useState([]);

	useEffect(() => {
		const fetchPedidos = async () => {
			try {
				const response = await axios.get("http://localhost:3000/pedidos");
				setPedidos(response.data);
			} catch (error) {
				console.error("Erro ao buscar os pedidos:", error);
			}
		};

		fetchPedidos();
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/pedidos/${id}`);
			setPedidos(pedidos.filter((pedido) => pedido.id !== id));
		} catch (error) {
			console.error("Erro ao apagar o pedido:", error);
		}
	};

	const handleProceed = async (id) => {
		try {
			await axios.patch(`http://localhost:3000/pedidos/${id}`, { status: "Enviando" });
			setPedidos(pedidos.map((pedido) =>
				pedido.id === id ? { ...pedido, status: "Enviando" } : pedido
			));
		} catch (error) {
			console.error("Erro ao proceder o pedido:", error);
		}
	};

	return (
		<div className="pedidos-container">
			<table className="pedidos-table">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Produtos</th>
						<th>Quantidades</th>
						<th>Preço (Uni)</th>
						<th>Valor Total</th>
						<th>Forma de Pagamento</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{pedidos.map((pedido) => (
						<tr key={pedido.id}>
							<td>{pedido.clienteName}</td>
							<td>{pedido.products.map((produto) => produto.name).join(", ")}</td>
							<td>{pedido.products.map((produto) => produto.quantity).join(", ")}</td>
							<td>R${pedido.products.map((produto) => produto.price).join(", R$")}</td>
							<td>R${pedido.total}</td>
							<td>{pedido.paymentMethod}</td>
							<td>
								<button type="button"
									className="btn-delete"
									onClick={() => handleDelete(pedido.id)}
								>
									Apagar
								</button>
								<button type="button"
									className="btn-proceed"
									onClick={() => handleProceed(pedido.id)}
									disabled={pedido.status === "Enviando"}
								>
									{pedido.status === "Enviando" ? "Enviando" : "Enviar"}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
