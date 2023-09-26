import React, { useState } from 'react'
import './style.css'
import ArrowIcon from '../ArrowIcon/index'
import { toCamelCase } from '../../utils';

const colorScheme = {
  espresso: '#2C1400',
  walnut: '#582F11',
  oak: 'rgb(221, 181, 134)',
  blackwood: 'rgb(10, 4, 1)',
  eclipse: 'rgb(29, 29, 29)',
  twilight: 'rgb(153, 153, 153)',
  solstice: 'rgb(248, 248, 248)'
};

const ProductCard = ({ product }) => {
 
  const colorCode = colorScheme[toCamelCase(product?.name?.toLowerCase())];
  return (
    <div className='product-card'>
      <img
        src={process.env.PUBLIC_URL + '/images/' + product?.imageUrl}
        alt={product.description}
        className='product-image'
      />
    <div className='color-label'>
        <div className='color-name'>{product?.name}</div>
        <div
          className='color-badge'
          style={{ backgroundColor: colorCode }}
        ></div>
      </div>
     <div className='product-details'>
        <h6 className='product-title'>{product?.description}</h6>
        <p className='product-description'>
          {product?.price} |{' '}
          <span className='customize'>
            {' '}
            customise <ArrowIcon size={10} color='#19142B' direction='right' />
          </span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
