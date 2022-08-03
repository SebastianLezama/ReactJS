import React, { useContext } from 'react'
import { FavContext } from '../../context/FavContext'
import CardList from './Cards/CardList'

const Favorites = () => {
  const { favs } = useContext(FavContext)

  if (favs.length === 0){return(<div><h2>No hay favoritos</h2></div>)}

  return (
    <CardList items={favs} />
  )
}

export default Favorites