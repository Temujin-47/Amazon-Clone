import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './Stateprovider';


function Checkout() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            <div className='checkout_title'>
            <h1> Checkout Page</h1>
            </div>
            {basket.map((element,index)=>{
                return (
                    <CheckoutProduct
                        key={index}
                        id={index}
                        title={element.title}
                        price={element.price}
                        rating={element.rating}
                        img={element.img}
                    />
                )
            })}
            
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;