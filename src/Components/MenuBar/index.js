import React, { useState } from 'react'
import './style.css'
import CustomSelect from './CustomSelect'
import { formatCategoryIfSnakeCase } from '../../utils'

export const MenuBar = ({
  selectedCategory,
  onMenuItemClick,
}) => {
  const [activeId, setActiveId] = useState(null)
  const [scrollToSelector, setScrollToSelector] = useState();

  const handleMenuItemClick = (category) => {
    setActiveId(category);
    onMenuItemClick(category);
  };
  

  const options = ['Coffee Tables', 'Side Tables', 'Media Units', 'Table Sets']

  return (
    <div className='div'>
      <div id='myHeader' className='myHeader'>
        <div class='menu_items fTXQBa'>
          <a
            href='#coffeeTables'
            className={`menu_text ${
              activeId === 'coffee_tables' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('coffee_tables')}
          >
            Coffee Tables
          </a>
          <a
            href='#sideTables'
            className={`menu_text ${
              activeId === 'side_tables' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('side_tables')}
          >
            Side Tables
          </a>
          <a
            href='#mediaUnits'
            className={`menu_text ${
              activeId === 'media_units' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('media_units')}
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
          selectedOption={formatCategoryIfSnakeCase(selectedCategory)}
          onOptionSelect={handleMenuItemClick}
        />
      </div>
    </div>
  )
}
