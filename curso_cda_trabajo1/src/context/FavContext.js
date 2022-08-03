import { createContext, useEffect, useState } from "react";


export const FavContext = createContext()

const FavProvider = (props) => {
  const [ favs, setFavs ] = useState(() => {
    const localData = localStorage.getItem('favItems');
    return localData ? JSON.parse(localData) : [];
  });
  const [ favsItems, setFavsItems ] = useState(0)

  const clearFavs = () => {
    setFavs([])
  }

  const isInFavs = (id) => {
    return favs.some((prod) => prod.id === id);
  };

  const addToFavs = (item) => {
    if (!isInFavs(item.id)) {setFavs([...favs, {...item} ])} 
  }

  const removeFromFavs = (id) => {
    const filteredProd = favs.filter((prod) => prod.id !== id);
    setFavs(filteredProd)
  }

  const favsItemsCounter = () => {
    const favsCopy = [...favs];
    let count = 0;
    favsCopy.forEach(() => count += 1)
    setFavsItems(count)
  }

  useEffect(() => {
    favsItemsCounter()
    localStorage.setItem('favItems', JSON.stringify(favs));
  }, [favs])


  return (
    <FavContext.Provider value={{ favs, favsItems, clearFavs, addToFavs, removeFromFavs, isInFavs }}>
      {props.children}
    </FavContext.Provider>
    )
}

export default FavProvider
