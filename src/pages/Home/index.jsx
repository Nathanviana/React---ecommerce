import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../components/shared/ExampleCarouselImage";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="home-container">
			{/* Carrossel de Imagens */}
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				className="home-carousel"
			>
				<Carousel.Item>
					<ExampleCarouselImage src="https://t4.ftcdn.net/jpg/08/45/58/95/360_F_845589510_QmbsMXwCXhQG2jrEHLrhIzQqdo1EeFe3.jpg" />
					<Carousel.Caption>
						<h3>Bem-vindo à Nossa Loja</h3>
						<p>
							Encontre os melhores produtos e serviços com preços acessíveis.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<ExampleCarouselImage
						src="https://img.pikbest.com/wp/202413/aroma-men-s-perfume-plant-leaves-promotional-web-banner_9087731.jpg!w700wp"
						alt=""
					/>
					<Carousel.Caption>
						{/*<img src="./assets/img/artic_zaad_perfume.jpeg" alt="" />*/}
						<h3>Qualidade Garantida</h3>
						<p>Produtos selecionados para atender suas necessidades.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<ExampleCarouselImage src="https://img.freepik.com/vetores-gratis/frasco-de-perfume-em-fundo-de-tecido-de-seda-preto_107791-1629.jpg?semt=ais_hybrid" />
					<Carousel.Caption>
						<h3>Ofertas Exclusivas</h3>
						<p>Aproveite nossas promoções e descontos especiais!</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			{/* Seção de Destaques */}
			<section className="highlights">
				<h2>Produtos em Destaque</h2>
				<div className="product-cards">
					<Link to="/produtos">
						<div className="product-card">
							<img
								src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFlb_uQUK99N2b4mNEx5xmwTZnT3f_Z61xVfYz9t3tRgp6PIg11Xm5s0PFHDVHwl2Jyfr46psu1akPtSTF57Ckop49QEtGVKQjFeaNZg1SYvOMLzeYWozB&usqp=CAE"
								alt="Produto 1"
							/>
							<h3>Moschino Toy Boy 30ml</h3>
							<p>Novo</p>
						</div>
					</Link>
					<Link to="/produtos">
						<div className="product-card">
							<img
								src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ88IAGQZXov5j6EpPJjOU4dSK67GS8rNh-8J8mLK0mLvcY5ugRTRtlxXbtiDoLO2rWFy7cV28_mpucwPyASGMGjH0mNiWopwxTErVTu-qoEwbwzI7IJmsJyrw&usqp=CAE"
								alt="Produto 2"
							/>
							<h3>Dior Hypnotic Poison Eau De Toilette</h3>
							<p>Novo</p>
						</div>
					</Link>
					<Link to="/produtos">
						<div className="product-card">
							<img
								src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2a2LoZT7_OQUAl7lF6p9W1dbv_WIn76Zlv5nJaxoq3l6-uzMaRG2_bEyKb9V8z4XKU7jfANnKGSvcHNxpUsb31Pvf3EsFGykjozMBTK71Shve-5ZhrBEkdw&usqp=CAE"
								alt="Produto 3"
							/>
							<h3>Good Girl Carolina Herrera</h3>
							<p>Novo</p>
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
