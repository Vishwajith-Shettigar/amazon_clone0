import React from 'react'
import './Checkoutproduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({itemid,title,imagel,price,rating}) {
  


const [{basket},dispatch]=useStateValue();


  const Remove_product=()=>{

    // remove item form basket


dispatch({
    type: "REMOVE_FROM_BASKET",
    id:itemid
});




  };
  
    return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct__image' src={imagel} alt=""/>

        <div className="checkoutproduct__info">
            <p className="checkoutproduct__title">{title}</p>
            <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{price}</strong>


            </p>

<div className='checkoutproduct__rating'>
    {
        Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
        ))
    }
</div>

<button onClick={Remove_product} >Remove</button>

        </div>



    </div>
  )
}

export default CheckoutProduct