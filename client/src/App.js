import React, {useState, useEffect} from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import axios from 'axios'
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    console.log("test")
    axios.get('http://localhost:8000/api/products')
        .then(res =>{
            setProducts(res.data);
            setLoaded(true);
        })
  }, [])

  const removeFromDom = productID => {
    setProducts(products.filter(product => product._id !== productID));
  }

  return (
    <div className="App">
      <Router>
          <Main products = {products} setProducts = {setProducts} loaded = {loaded} removeFromDom = {removeFromDom} path = "products/"/>
          <Detail removeFromDom = {removeFromDom} products = {products} setProducts = {setProducts} path="products/:id"/>
          <Update products = {products} setProducts = {setProducts} path="products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
