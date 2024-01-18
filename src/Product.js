import React from 'react'
import "./Product.css"
import { useStateValue } from './Stateprovider';

function Product(props) {
  const[{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:props.id,
        title:props.title,
        img:props.img,
        price:props.price,
        rating:props.rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className='product_info'>
            <p> {props.title}</p>
            <p className='product_price'>
            <small> $</small>
            <strong> {props.price}</strong>
            </p>
            <div className='product_rating'>
                {Array(props.rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}

            </div>
        
        </div>

        <img src={props.img} alt="" />
        <button onClick={addToBasket}> Add To Basket</button>
    </div>
  );
}

export default Product;