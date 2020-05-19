import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

export default props =>{
    const {removeFromDom} = props;
    const [product, setProduct] = useState({})
    // const [loaded, setLoaded] = useState(false)
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
            // .then(setLoaded(true));
    }, [])

    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p><Link to={"/products/" + props.id + "/edit"}>Edit This Product</Link></p>
            <p><Link to={"/products"}>Back to Main Page</Link></p>
            <DeleteButton productID = {props.id} successCallback = {() =>{
                removeFromDom(props.id);
                navigate("/products/");
            }}/>
        </div>
    )
}