import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import SingleProductForm from '../components/SingleProductForm';

export default props => {
    const {id} = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true)
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && <SingleProductForm onSubmitProp = {updateProduct} initialTitle = {title} initialPrice = {price} initialDescription = {description} />}
            <Link to={"/products/" + props.id}>Back to This Product</Link>
        </div>
    )
}