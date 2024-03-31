"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Shop.css";

const Shop = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  function redirectToProduct1() {
    window.location.href = "/products/fortnite_public";
  }

  function redirectToProduct2() {
    window.location.href = "/products/perm_spoofer";
  }

  return (
    <>
      <div className="shop mx-auto gap-7" id="shop">
        <div className="sectionHeading" data-aos="fade-in">
          <p>WE WILL HELP YOU</p>
          <h1 className="gradient font-bold">READY TO WIN ? </h1>
        </div>
        <div className="products">
          <div className="product" data-aos="fade-up">
            <div className="productImage">
              <img src="https://argon-one.vercel.app/image 7.webp" alt="" />
            </div>
            <button className="purchase" onClick={redirectToProduct1}>
              Purchase
            </button>
          </div>
          <div className="product" data-aos="fade-up">
            <div className="productImage">
              <img src="https://argon-one.vercel.app/image 8.webp" alt="" />
            </div>
            <button className="purchase" onClick={redirectToProduct2}>
              Purchase
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Shop;
