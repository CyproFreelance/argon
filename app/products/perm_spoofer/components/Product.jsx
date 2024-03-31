"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Product.css";

// imported the checkout function @/checkout.
import { checkout } from "@/checkout";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <>
      <div className="product-container flex items-center" data-aos="zoom-in">
        <div className="container-left">
          <div className="product-image">
            <img src="https://argon-one.vercel.app/image 8.webp" alt="" />
          </div>
        </div>
        <div className="product-texts">
          <div className="product-intro">
            <h1>Perm Spoofer</h1>
            <p>Perm Spoofer</p>
          </div>
          <div className="product-detail">
            <p>
              Argon Perm Spoofer is a cost-effective, high-performance HWID
              spoofer known for its effectiveness in bypassing anti-cheat
              systems such as EAC, BE, VGK, FiveM, and CoD. It's a top choice
              for gamers seeking a reliable solution to avoid HWID bans
            </p>
          </div>
          <div className="buying-options flex gap-6">
            <button
              className="option"
              onClick={() => {
                checkout({
                  items: [
                    {
                      price: "paste the product link",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              1 Day
            </button>
            <button
              className="option"
              onClick={() => {
                checkout({
                  items: [
                    {
                      price: "paste the product link",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              1 Week
            </button>
            <button
              className="option"
              onClick={() => {
                checkout({
                  items: [
                    {
                      price: "paste the product link",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              1 Month
            </button>
            <button
              className="option"
              onClick={() => {
                checkout({
                  items: [
                    {
                      price: "paste the product link",
                      quantity: 1,
                    },
                  ],
                });
              }}
            >
              Lifetime
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
