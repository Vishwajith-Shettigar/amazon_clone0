import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Home from "./Home";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping basket</h2>

            {basket.map((item) => (
              <>
                <CheckoutProduct
                  itemid={item.id}
                  title={item.title}
                  imagel={item.imagel}
                  price={item.price}
                  rating={item.rating}
                />{" "}
              </>
            ))}
          </div>
        )}
      </div>

      {basket.length>0 &&(
        <div className="checkout__right">

          <Subtotal/>
        </div>
      )}

      
    </div>
  );
}

export default Checkout;
