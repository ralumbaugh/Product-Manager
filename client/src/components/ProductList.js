import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const { setLoaded } = props;
    const deleteProduct = (productID) => {
        console.log(productID)
        axios.delete('http://localhost:8000/api/products/' + productID)
            .then(res => {
                setLoaded(false);
                navigate('/products/');
            })
    }

    return (
        <div>
            {props.products.map((product, idx) => {
                return(
                    <p key = {idx}>
                        <Link to = {`/products/${product._id}`}>{product.title}</Link>
                        <button onClick = {(e) =>{deleteProduct(product._id)}}>Delete</button>
                    </p>
                ) 
            })}
        </div>
    )
}