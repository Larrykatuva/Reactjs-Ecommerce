import React from 'react'
import {BiCart} from 'react-icons/bi'

const Product = ({image, price, name}) => {
    return (
        <div id='product'>
            <img src={image} alt=""/>
            <h5>KsH {price}</h5>
            <p>{name}</p>
            <a href="" id="btn"><BiCart/> Add to Cart</a>
        </div>
    )
}

export default Product
