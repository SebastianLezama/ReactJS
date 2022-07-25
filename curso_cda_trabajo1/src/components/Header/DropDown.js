import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css'


const DropDown = () => {
  const options = [
    { label: 'Todas ', value: 'productos'},
    { label: 'Remeras ', value: 'category/remeras'},
    { label: 'Camisas ', value: 'category/camisas'},
    { label: 'Gorras ', value: 'category/gorras'},
    { label: 'Billeteras ', value: 'category/billeteras'},
    { label: 'Riñoneras ', value: 'category/rinoneras'}
  ]

  const [ click, setClick ] = useState(false);
  const [ drop, setDrop ] = useState(false);

  const handleClick = () => {
    setClick(!click)
    console.log(click);
  }

  const onMouseEnter = () => {
    if(window.innerWidth < 960){setDrop(false)}
      else {setDrop(true)}
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960){setDrop(false)}
      else {setDrop(false)}
  }
  
  return (
    <ul onClick={handleClick} 
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
      {options.map((op, index) => (
              <li className='nav-item'key={index}>
                <Link className={op.label} to={`/${op.value}`} onClick={() => setClick(false)}>
                  {op.label}
                </Link>
              </li>
              ))}
    </ul>
  );
  
}

export default DropDown;
