import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p><Link to = {`/products/${product._id}`} key = {idx}>{product.title}</Link></p>
            })}
        </div>
    )
}