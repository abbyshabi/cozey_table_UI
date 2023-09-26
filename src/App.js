import React, { useState, useEffect, Fragment } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard'
import { MenuBar } from './Components/MenuBar'
import productsData from './data/tables.json'
import './fontLoader'; 

function App () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsData)
  }, [])

  return (
    <>
      <div className='product-grid'>
        <div className='page_header'>
          <p className='page_category' style={{fontFamily: 'Quincy'}}>Tables </p>
          <p className='page_text' style={{fontFamily: 'Larsseit-Medium'}}> A perfect pairing to your sofa </p>
        </div>

        <MenuBar />
        {products.map((category, index) => (
          <div key={index} className='category'>
            <div className='product-list-container'>
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
  )
}

export default App
