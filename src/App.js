import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ProductCard from './Components/ProductCard';
import { MenuBar } from './Components/MenuBar';
import productsData from './data/tables.json';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Coffee Tables'); // Default category

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const coffeeRef = useRef(null);
  const sideRef = useRef(null);
  const mediaRef = useRef(null);
  const tableSetsRef = useRef(null);

  const handleMenuItemClick = category => {
    setSelectedCategory(category);
    switch (category) {
      case 'coffee_tables':
        coffeeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'side_tables':
        sideRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'media_units':
        mediaRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'table_sets':
        tableSetsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='product-grid'>
        <div className='page_header'>
          <p className='page_category' style={{ fontFamily: 'Quincy', fontSize: '44px', lineHeight: '44px'}}>
            Tables{' '}
          </p>
          <p className='page_text' style={{ fontFamily: 'Larsseit Medium', lineHeight: '26px', fontSize: '18px' }}>
            {' '}
            A perfect pairing to your sofa{' '}
          </p>
        </div>
        <MenuBar
          selectedCategory={selectedCategory}
          onMenuItemClick={handleMenuItemClick}
          scrollToSelector={selectedCategory}
        />
        {products.map((category, index) => (
          <div key={index} className='category'>
            <div className='product-list-container' ref={category.category === 'Coffee Tables' ? coffeeRef : category.category === 'Side Tables' ? sideRef : category.category === 'Media Units' ? mediaRef : tableSetsRef}>
              <h1 className='product-category'>{category.category}</h1>
              <ul
                className={`product-list ${
                  category.products.length >= 3 ? 'grid-3' : 'grid-2'
                }`}
              >
                {category.products.map((product, productIndex) => (
                  <p key={productIndex} className='product-item'>
                    <ProductCard product={product} />
                  </p>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
