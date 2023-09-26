import React, { useState } from 'react'
import './style.css'

const ProductCard = ({ product }) => {
  const baseImageUrl = '../../assets/images/' // Adjust the path as needed
 
  const [colorOptionsVisible, setColorOptionsVisible] = useState(false)

  console.log(baseImageUrl + product?.imageUrl)

 
  const toggleColorOptions = () => {
    setColorOptionsVisible(!colorOptionsVisible)
  }

  return (
    <div className='product-card'>
      <img
        src={process.env.PUBLIC_URL + '/images/'+product?.imageUrl}
        alt={product.description}
        className='product-image'
      />
      <h6 className='product-title'>{product?.description}</h6>
      <p className='product-description'>{product?.price} | <b>customise </b></p>
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
