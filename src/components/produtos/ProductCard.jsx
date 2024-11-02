import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R$ {product.price}</Card.Text>
        <Button variant="primary">Ver Mais</Button>
      </Card.Body>
    </Card>
  );
}

// Validação das props com PropTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
