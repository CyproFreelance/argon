"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Cards.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
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
      <div className="cards flex mx-auto" data-aos="zoom-in">
        <div className="card flex flex-col">
          <div className="product-availability">In Stock</div>
          <div className="product-image">
            <img src="https://argon-one.vercel.app/image 7.webp" alt="" />
          </div>
          <div className="card-texts">
            <h1>Fortnite Public</h1>
            <p>Fortnite Public External</p>
          </div>
          <div className="card-detail">
            <p>
              Argon has remained undetected as an External Cheat for both
              professionals and amateurs since its release. During this time,
              users have been able to confidently participate in tournaments and
              Unreal lobbies with ease. They are relishing the serives offered
              by argon.
            </p>
          </div>
          <div className="card-buy flex justify-between items-center w-full">
            <h1 className="price">€ 6.99</h1>
            <button className="buy-card" onClick={redirectToProduct1}>
              Purchase
            </button>
          </div>
        </div>
        <div className="card flex flex-col">
          <div className="product-availability">In Development</div>
          <div className="product-image">
            <img src="https://argon-one.vercel.app/image 8.webp" alt="" />
          </div>
          <div className="card-texts">
            <h1>Perm Spoofer</h1>
            <p>Perm Spoofer</p>
          </div>
          <div className="card-detail">
            <p>
              Argon Perm Spoofer is a cost-effective, high-performance HWID
              spoofer known for its effectiveness in bypassing anti-cheat
              systems such as EAC, BE, VGK, FiveM, and CoD. It's a top choice
              for gamers seeking a reliable solution to avoid HWID bans
            </p>
          </div>
          <div className="card-buy flex justify-between items-center w-full">
            <h1 className="price">€ 4.99</h1>
            <button
              className="buy-card"
              onClick={() => {
                alert("This product is under development");
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
