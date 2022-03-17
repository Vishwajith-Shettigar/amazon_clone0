import React from "react";
import "./Header.css";
 
import SearchIcon from "@material-ui/icons/Search";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { SportsBasketball } from "@material-ui/icons";
import { StateProvider, useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {


  const [{ basket,user}]=useStateValue()
  console.log(basket);


  const login=()=>{
  if (user){
    auth.signOut();

  }
  }
  return (
    // Header
    <nav className="Header">
      {/* //Logo amazon */}
      <Link to="/">
        <img
          className="Header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>

      {/* Search bar  */}
      <div className="Header__Search">
        <input type="text" className="Header__SearchInput" />
        <SearchIcon className="Header__searchIcons" />
      </div>

      {/* 4 links */}

      <div className="Header__Nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="Header__link">
          <div onClick={login} className="Header__Option">
            <span className="Header__Option_Line_One">Hello {user?.email}</span>
            <span className="Header__Option_Line_Two"> { user? "Sign out" : "sign in"}</span>
          </div>
        </Link>

        {/* 2nd link */}

        <Link to="/login" className="Header__link">
          <div className="Header__Option">
            <span className="Header__Option_Line_One">Returns</span>
            <span className="Header__Option_Line_Two">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}

        <Link to="/login" className="Header__link">
          <div className="Header__Option">
            <span className="Header__Option_Line_One">Your</span>
            <span className="Header__Option_Line_Two">Prime</span>
          </div>
        </Link>

        {/* 4th link  */}

        <Link to="/checkout" className="Header__link">
          <div className="Header__optionbasket">
            {/* shoping icon  */}

            <ShoppingBasketIcon />

            {/* {items } */}

            <span className="Header__Option_Line_Two  Basket_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
