import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default ({products, removeFromDom}) => {

    return (
        <div>
            {products.map((product, idx) => {
                return(
                    <p key = {idx}>
                        <Link to = {`/products/${product._id}`}>{product.title}  </Link>
                        |
                        <Link to = {`/products/${product._id}/edit`}>  Edit  </Link>
                        |
                        <DeleteButton productID={product._id} successCallback = {() => removeFromDom(product._id)} />
                    </p>
                ) 
            })}
        </div>
    )
}