import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Productos from './components/Productos/Productos';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/cart" element={<Cart />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
