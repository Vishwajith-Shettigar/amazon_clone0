import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating,imagel}) {
const [{},dispatch]=useStateValue();

 const addtobasket=()=>{

//add item ot basket

 dispatch ({
   type:"ADD_TO_BASKET",
   item:{
     id:id,
     title:title,
imagel:imagel,
price :price,
rating:rating



   },
 });



 };
  return (

   
   

   
    
    <div className='product'>


<div className='product__info'>

      <p>{title}</p>
        <p className='product__price'>
<small>$</small>
<strong>{price}</strong>

        </p>

        <div className='product__rating'>
            {
                Array(rating)
                .fill()
                .map((_)=>(
                   <p>⭐</p>
                ))

            }
        </div>
</div>

      

        <img src={imagel}/>
        <button onClick={addtobasket}>Add to cart</button>

    </div>


    
  )
}

export default Product