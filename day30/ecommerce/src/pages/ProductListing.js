import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from ".";
import ProductItem from "";

function ProductListing(){
    // const items = useSelector(state => state.ProductListing.item)
    return(
        <div className="items-container">
            {items.map((item, index)=>{
                <ProductItem 
                    key={index}
                    item={item}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                    id={item.id}
                    />
            })}
        </div>
    );

}

export default ProductListing;