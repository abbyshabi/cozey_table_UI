import React, { useState } from 'react'
import './style.css'
import CustomSelect from './CustomSelect'

export const MenuBar = () => {
  const [activeId, setActiveId] = useState(null)

  const handleMenuItemClick = id => {
    setActiveId(id)
  }

  const options = ['Coffee Tables', 'Side Tables', 'Media Units', 'Table Sets']

  return (
    <div className='div'>
      <div id='myHeader' className='myHeader'>
        <div class='menu_items fTXQBa'>
          <a
            href='#coffee'
            className={`menu_text ${
              activeId === 'section1 ' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('coffee')}
          >
            Coffee Tables
          </a>
          <a
            href='#side'
            className={`menu_text ${
              activeId === 'section1 ' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('side')}
          >
            Side Tables
          </a>
          <a
            href='#media'
            className={`menu_text ${
              activeId === 'section1 ' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('media')}
          >
            Media Units
          </a>
          <a
            href='#table_sets'
            className={`menu_text ${
              activeId === 'section1 ' ? 'active-link menu_text' : ''
            }`}
            onClick={() => handleMenuItemClick('table_sets')}
          >
            Table Sets
          </a>
        </div>

        <CustomSelect options={options} />
      </div>
    </div>
  )
}
