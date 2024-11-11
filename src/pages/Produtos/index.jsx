import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
function Produtos() {
	const [produtos, setProdutos] = useState([]);
	const [carrinho, setCarrinho] = useState([]);

	useEffect(() => {
		const fetchProdutos = async () => {
			try {
				const api = await axios.get("http://localhost:3000/produtos");
				setProdutos(api.data);
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			}
		};

		fetchProdutos();

		const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
		setCarrinho(carrinhoSalvo);
	}, []);

	useEffect(() => {
		if (carrinho.length > 0) {
			localStorage.setItem("carrinho", JSON.stringify(carrinho));
		}
	}, [carrinho]);

	const adicionarAoCarrinho = (produto) => {
		const produtoExistente = carrinho.find((item) => item.id === produto.id);

		if (produtoExistente) {
			const carrinhoAtualizado = carrinho.map((item) =>
				item.id === produto.id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
			setCarrinho(carrinhoAtualizado);
		} else {
			const carrinhoAtualizado = [...carrinho, { ...produto, quantity: 1 }];
			setCarrinho(carrinhoAtualizado);
		}
	};
	return (
		<Col>
			<h2 className="text-center my-4">Nossos Produtos</h2>
			<Row>
				{produtos.map((product) => (
					<Col key={product.id} md={4} lg={3}>
						<Card style={{ width: "18rem", marginBottom: "20px" }}>
							<Card.Img variant="top" src={product.img} alt={product.name} />
							<Card.Body>
								<Card.Title>{product.name}</Card.Title>
								<Card.Text>R$ {product.price}</Card.Text>
								<Button
									variant="primary"
									onClick={() => adicionarAoCarrinho(product)}
								>
									Comprar
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Col>
	);
}

export default Produtos;
