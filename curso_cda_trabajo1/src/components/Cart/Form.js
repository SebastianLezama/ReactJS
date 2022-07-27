import React, { useState } from 'react'
import './Cart.scss'

const Form = () => {

  const [ formData, setFormData ] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    ciudad: '',
    telefono: '',
    cp: ''
})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  }

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
          <input 
            type="text" 
            name='nombre'
            placeholder='Nombre'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <li>
          <input 
            type="text" 
            name='apellido'
            placeholder='Apellido'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <li>
          <input 
            type="email" 
            name='mail'
            placeholder='Mail'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <li>
          <input 
            type="text" 
            name='ciudad'
            placeholder='Ciudad'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <li>
          <input 
            type="text"
            name='telefono'
            placeholder='Telefono'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <li>
          <input 
            type="text" 
            name='cp'
            placeholder='Codigo Postal'
            onChange={handleChange}
            value={formData.nombre}
          />
        </li>
        <input type="submit" className="flat-button" value="SEND" />
        </ul>
      </form>
    </div>
  )
}

export default Form
