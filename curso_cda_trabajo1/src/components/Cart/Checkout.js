import './Cart.scss'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Checkout.scss'

const Checkout = () => {
  const { responseId } = useParams()

  function myFunction() {
    const copyText = document.getElementById('myInput')

    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
  }

  return (
    <div className="checkoutContainer">
      <div className="codigo">
        <div>
          Gracias por tu compra, éste es tu código para que puedas seguir el
          envío:
        </div>
        <div>
          <input type="text" defaultValue={responseId} id="myInput"></input>
          <button onClick={() => myFunction()}>Copiar código</button>
        </div>
      </div>
      <Link to="/productos" className="flatButton">
        <h2>Seguir Comprando</h2>
      </Link>
    </div>
  )
}

export default Checkout
