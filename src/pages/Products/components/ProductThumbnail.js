import React from "react";

const ProductThumbnail = props => {

    const { product } = props;
    
    return (
        <div className="border border-black w-40 h-40">
            <h1>{product.name}</h1>
        </div>
    )
}

export default ProductThumbnail;