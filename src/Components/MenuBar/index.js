import React, { useState } from 'react'
import './style.css'
import CustomSelect from './CustomSelect'

export const MenuBar = ({
  selectedCategory,
  onMenuItemClick,
  scrollToSelector
}) => {
  const [activeId, setActiveId] = useState(null)

  const handleMenuItemClick = category => {
    setActiveId(category)
    onMenuItemClick(category)
  }


  const options = ['Coffee Tables', 'Side Tables', 'Media Units', 'Table Sets']

  return (
    <div className='div'>
      <div id='myHeader' className='myHeader'>
        <div class='menu_items fTXQBa'>
          <a
            href='#coffeeTables'
            className={`menu_text ${
              activeId === 'coffee' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('coffee')}
          >
            Coffee Tables
          </a>
          <a
            href='#sideTables'
            className={`menu_text ${
              activeId === 'side' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('side')}
          >
            Side Tables
          </a>
          <a
            href='#mediaTables'
            className={`menu_text ${
              activeId === 'media' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('media')}
          >
            Media Units
          </a>
          <a
            href='#tableSets'
            className={`menu_text ${
              activeId === 'table_sets' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('table_sets')}
          >
            Table Sets
          </a>
        </div>

        <CustomSelect
          options={options}
          selectedOption={selectedCategory}
          onOptionSelect={onMenuItemClick}
          scrollToSelector={scrollToSelector}
        />
      </div>
    </div>
  )
}
