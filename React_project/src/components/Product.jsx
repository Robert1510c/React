import React from "react";
export default function Product({title, price, description}){
    return (
    <div className="product-item">
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
    </div>);
}