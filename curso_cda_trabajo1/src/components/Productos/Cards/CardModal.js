import React from 'react'
import s from './Card.module.css'
import { MdClose } from 'react-icons/md'
import Counter from '../../Counter/Counter'

const CardModal = ({
  item,
  handleClose,
  show,
  notInCart,
  modalRef,
  closeModal,
  showItemInCart,
}) => {
  return (
    <>
      {show && (
        <div className={s.CardDetail} ref={modalRef} onClick={closeModal}>
          <div className={s.divModal}>
            <div>
              <h2>Detalle del producto</h2>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <Counter item={item} />
              {notInCart && showItemInCart()}
            </div>
            <img src={item.img} alt={item.name} />
            <MdClose className={s.MdClose} onClick={handleClose} />
          </div>
        </div>
      )}
    </>
  )
}

export default CardModal
