import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from './ProductItem';

const PRODUCTS = [
  { id: 1, name: '제품 A', price: 10000, image: 'https://via.placeholder.com/150' },
  { id: 2, name: '제품 B', price: 20000, image: 'https://via.placeholder.com/150' },
  { id: 3, name: '제품 C', price: 15000, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const { dispatch } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const quantity = parseInt(quantities[product.id]) || 1;
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
  };

  const handleQuantityChange = (e, id) => {
    setQuantities({ ...quantities, [id]: e.target.value });
  };

  return (
    <div className="product-grid">
      {PRODUCTS.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onAddToCart={handleAddToCart} 
          onQuantityChange={handleQuantityChange}
          quantity={quantities[product.id]}
        />
      ))}
    </div>
  );
};

export default ProductList;