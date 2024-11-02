import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Produto 1', price: '100.00', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Produto 2', price: '150.00', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Produto 3', price: '200.00', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Produto 4', price: '250.00', image: 'https://via.placeholder.com/150' },
];

function ProductList() {
  return (
    <Container>
      <h2 className="text-center my-4">Nossos Produtos</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;