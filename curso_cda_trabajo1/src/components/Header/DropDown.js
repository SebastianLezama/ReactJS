import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const options = [
  { label: 'Todas ', value: 'productos'},
  { label: 'Remeras ', value: 'category/remeras'},
  { label: 'Camisas ', value: 'category/camisas'},
  { label: 'Gorras ', value: 'category/gorras'},
  { label: 'Billeteras ', value: 'category/billeteras'},
  { label: 'Riñoneras ', value: 'category/rinoneras'}
]


const DropDown = () => {

  const [ click, setClick ] = useState(false);

  const handleClick = () => {
    setClick(!click)
    console.log(click);
  }
  
  return (
    <ul onClick={handleClick} 
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu' }>
      {options.map((op, index) => (
              <li key={index}>
                <Link className={op.label} to={`/${op.value}`} onClick={() => setClick(false)}>
                  {op.label}
                </Link>
              </li>
              ))}
    </ul>
  );
  
}

export default DropDown;
