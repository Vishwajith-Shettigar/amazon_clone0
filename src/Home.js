import React from "react";
import "./Home.css";

import Product from "./Product.js";

function Home() {
  return (
    <div className="Home">
      <img
        className="Home__iamge"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />



<div className="home__row">
  <Product
        id="1001"
        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
        price={98}
        rating={5}
        imagel="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      />
      <Product
        id="1002"
        title="2021 Apple iPad Mini with A15 Bionic chip (Wi-Fi, 256GB) - Pink (6th Generation) "
        price={800}
        rating={4}
        imagel="https://images-eu.ssl-images-amazon.com/images/I/41edHjaz6IL._SY445_SX342_QL70_FMwebp_.jpg"
      />
      
</div>

<div className="home__row">
  <Product
        id="1003"
        title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display. "
        price={40}
        rating={3}
        imagel="https://m.media-amazon.com/images/I/61IMRs+o0iL._SX569_.jpg"
      />
      <Product
        id="1004"
        title="HP Pavilion 14,11th Gen Intel Core i5 16GB RAM/512GB SSD 14 inch(35.6 cm) "
        price={500}
        rating={4}
        imagel="https://m.media-amazon.com/images/I/81rbG8d1X8L._SX569_.jpg"
      />

<Product
        id="1005"
        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)
        Brand: Amazon
        "
        price={98}
        rating={5}
        imagel="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX679_.jpg"
      />
      
</div>

<div className="home__row">
  <Product
        id="1006"
        title="LG UltraWide 87 cm (34 inch) - Ergo Stand, QHD (3440 x 1440) IPS (sRGB 99%) HDR 10, USB Hub (2 up 1 Down) HDMI X 2, Display Port, Inbuilt Speaker (14W x 2) - 34WN780 (Black)"
        price={508}
        rating={4}
        imagel="https://m.media-amazon.com/images/I/61R3GFLc3fL._SX569_.jpg"
      />
     
      
</div>
      
    </div>
  );
}

export default Home;
