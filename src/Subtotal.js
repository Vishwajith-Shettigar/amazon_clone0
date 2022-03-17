import React from 'react'
import './subtotal.css'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { baskettotal } from './Reducer';
function Subtotal() {

    const [{basket},dispatch]=useStateValue();

  return (
    <div className='subtotal'>
<CurrencyFormat

renderText={(value)=>(
    <>
    
    <p>
        Subtotal ({basket.length} items ): <strong> {value}</strong>

    </p>
    <small className='subtotal__gift'>
        <input type="checkbox"/> This order contains gift card
    </small>
    </>
)}
decimalScale={2}
value={baskettotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}

/>

        <button >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal