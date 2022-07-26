import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css'
import { categories } from '../Productos/Productos';


const DropDown = () => {
  const [ click, setClick ] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <ul onClick={handleClick} 
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
      {categories.map((op, index) => (
        <li key={index}>
          <Link className='dropdown-link' to={`/${op.value}`} onClick={() => setClick(false)}>
            {op.label}
          </Link>
        </li>
        ))}
    </ul>
  );
  
}

export default DropDown;
