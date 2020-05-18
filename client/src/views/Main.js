import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        Axios.get('http://localhost:8000/api/products')
            .then(res =>{
                setProducts(res.data);
                setLoaded(true);
            })
    }, [loaded])

    return(
        <div>
            <ProductForm setLoaded = {setLoaded}/>
            <hr/>
            <ProductList products = {products} setLoaded = {setLoaded} />
        </div>
    )
}