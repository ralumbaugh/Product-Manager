import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props =>{
    const [product, setProduct] = useState({})
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (productID) => {
        console.log(productID)
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then(res => {
                navigate('/products/');
            })
    }

    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={"/products/" + props.id + "/edit"}>Edit This Product</Link></p>
            <p><Link to={"/products"}>Back to Main Page</Link></p>
            <button onClick={(e) =>{deleteProduct(product._id)}}>Delete Product</button>
        </div>
    )
}