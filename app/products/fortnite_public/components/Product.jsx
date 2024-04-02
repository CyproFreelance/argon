"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Product.css";
import { useState } from "react";
import { checkout } from "@/checkout";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  let [buttonStates, setButtonStates] = useState([0, 0, 0, 0]);
  let [processState, setProcessState] = useState(false);

  function handlePayment() {
    let current_state = [...buttonStates];
    if (current_state[0])
      window.location.href = process.env.NEXT_PUBLIC_LINK_DAY;
    if (current_state[1])
      window.location.href = process.env.NEXT_PUBLIC_LINK_WEEK;
    if (current_state[2])
      window.location.href = process.env.NEXT_PUBLIC_LINK_MONTH;
    if (current_state[3])
      window.location.href = process.env.NEXT_PUBLIC_LINK_YEAR;
  }

  function handleEvent(position) {
    let arr = [...buttonStates];
    arr[position] = arr[position] ^ 1;
    for (let i = 0; i < 4; ++i) {
      if (i != position) arr[i] = 0;
    }

    setButtonStates(arr);

    let processBoolean = arr[position] === 1;
    setProcessState(processBoolean);
  }

  return (
    <>
      <div className="product-container flex items-center" data-aos="zoom-in">
        <div className="container-left">
          <div className="product-image">
            <img src="https://argon-one.vercel.app/image 7.webp" alt="" />
          </div>
        </div>
        <div className="product-texts">
          <div className="product-intro">
            <h1>Fortnite Public</h1>
            <p>Fortnite Public External</p>
          </div>
          <div className="product-detail">
            <p>
              Argon has remained undetected as an External Cheat for both
              professionals and amateurs since its release. During this time,
              users have been able to confidently participate in tournaments and
              Unreal lobbies with ease. They are relishing the serives offered
              by argon.
            </p>
          </div>
          <div className={`buying-options flex gap-6`}>
            <button
              className={`option ${buttonStates[0] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(0);
              }}
            >
              1 Day
            </button>
            <button
              className={`option ${buttonStates[1] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(1);
              }}
            >
              1 Week
            </button>
            <button
              className={`option ${buttonStates[2] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(2);
              }}
            >
              1 Month
            </button>
            <button
              className={`option ${buttonStates[3] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(3);
              }}
            >
              Lifetime
            </button>
          </div>
          <div className="final-btn-container flex gap-6 items-center">
            <button
              className={`proceed continue flex items-center gap-1 ${
                processState === true ? "show" : "disabled"
              }`}
              disabled={!processState}
              onClick={handlePayment}
            >
              Continue with payment{" "}
            </button>
            <div
              className={`font-semibold ${
                buttonStates[0] === 1 ? "show" : "product__price"
              }`}
            >
              $ 6.99
            </div>
            <div
              className={`font-semibold ${
                buttonStates[1] === 1 ? "show" : "product__price"
              }`}
            >
              $ 19.99
            </div>
            <div
              className={`font-semibold ${
                buttonStates[2] === 1 ? "show" : "product__price"
              }`}
            >
              $ 34.99
            </div>
            <div
              className={`font-semibold ${
                buttonStates[3] === 1 ? "show" : "product__price"
              }`}
            >
              $ 119.99
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
