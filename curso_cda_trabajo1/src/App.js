import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import CardContainer from './components/Productos/Cards/CardContainer';
import Favorites from './components/Productos/Favorites';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />}/>
          <Route path="/productos" element={<CardContainer />}/>
          <Route path="/category/:categoryId" element={<CardContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/favs" element={<Favorites />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
