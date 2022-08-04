import React, { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import CardList from './Cards/CardList'
import './Favorites.scss'

const Favorites = () => {
  const { favs } = useContext(FavContext)

  if (favs.length === 0) {
    return (
      <div>
        <h2>No hay favoritos</h2>
      </div>
    )
  }

  return (
    <div className="favs-container">
      <div className="favs">
        <h2>Favoritos</h2>
      </div>
      <div className="card-container">
        <CardList items={favs} notInCart={false} />
      </div>
    </div>
  )
}

export default Favorites
