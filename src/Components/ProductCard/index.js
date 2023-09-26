import React, { useState } from 'react'
import './style.css'
import ArrowIcon from '../ArrowIcon/index'

const ProductCard = ({ product }) => {
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false)

  const toggleColorOptions = () => {
    setColorOptionsVisible(!colorOptionsVisible)
  }

  return (
    <div className='product-card'>
      <img
        src={process.env.PUBLIC_URL + '/images/' + product?.imageUrl}
        alt={product.description}
        className='product-image'
      />
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
      {/* <div className='color-options-toggle' onClick={toggleColorOptions}>
        Color Options
      </div>
      {colorOptionsVisible && (
        <div className='color-options'>oak</div>
      )} */}
    </div>
  )
}

export default ProductCard
