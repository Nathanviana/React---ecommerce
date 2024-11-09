import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/shared/ExampleCarouselImage';
import './Home.css';


const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="home-container">
            {/* Carrossel de Imagens */}
            <Carousel activeIndex={index} onSelect={handleSelect} className="home-carousel">
                <Carousel.Item>
                    <ExampleCarouselImage src="https://t4.ftcdn.net/jpg/08/45/58/95/360_F_845589510_QmbsMXwCXhQG2jrEHLrhIzQqdo1EeFe3.jpg" />
                    <Carousel.Caption>
                        <h3>Bem-vindo à Nossa Loja</h3>
                        <p>Encontre os melhores produtos e serviços com preços acessíveis.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.pikbest.com/wp/202413/aroma-men-s-perfume-plant-leaves-promotional-web-banner_9087731.jpg!w700wp" alt=""/>
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
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 1" />
                        <h3>Produto 1</h3>
                        <p>Descrição breve do produto.</p>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 2" />
                        <h3>Produto 2</h3>
                        <p>Descrição breve do produto.</p>
                    </div>
                    <div className="product-card">
                        <img src="https://via.placeholder.com/150" alt="Produto 3" />
                        <h3>Produto 3</h3>
                        <p>Descrição breve do produto.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home