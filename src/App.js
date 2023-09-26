import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from "./Components/ProductCard"
import productsData from './data/tables.json';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate loading JSON data
    setProducts(productsData);
  }, []);

  
  return (
    <div className="product-grid">
      <h1 className='product-category'>Tables</h1>
      {products.map((category, index) => (
        <div key={index} className="category">
          <div className="product-list-container">
          <h1 className='product-category'>{category.category}</h1>
          <ul className={`product-list ${category.products.length >= 3 ? 'grid-3' : 'grid-2'}`}>
            {category.products.map((product, productIndex) => (
              <p key={productIndex} className="product-item">
                <ProductCard
                  product={product}
                />
              </p>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
