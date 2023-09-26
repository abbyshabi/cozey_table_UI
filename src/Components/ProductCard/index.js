import React, { useState } from 'react'
import './style.css'
import ArrowIcon from '../ArrowIcon/index'

const colorScheme = {
  espresso: '#2C1400',
  walnut: '#582F11',
  oak: '#806517',
  blackwood: '#000'
};

const ProductCard = ({ product }) => {
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false)

  const toggleColorOptions = () => {
    setColorOptionsVisible(!colorOptionsVisible)
  }
  const colorCode = colorScheme[product?.name?.toLowerCase()];


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
            customize <ArrowIcon size={10} color='#19142B' direction='right' />
          </span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
