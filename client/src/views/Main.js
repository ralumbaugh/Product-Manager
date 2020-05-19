import React from 'react';
import SingleProductForm from '../components/SingleProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default ({removeFromDom, products, setProducts, loaded}) => {

    // const removeFromDom = productID => {
    //     setProducts(products.filter(product => product._id !== productID));
    // }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }

    return(
        <div>
            <SingleProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}