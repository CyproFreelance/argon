"use client";
import React from "react";
import styles from "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(0);

  function handleMenu() {
    let bitwise = isOpen ^ 1;
    // console.log(bitwise);  for debugging purposes.
    setIsOpen(bitwise);
  }

  function handleClickNavbar() {
    window.location.href = "#shop";
  }

  return (
    <>
      <nav className="navbar flex justify-between items-center mx-auto">
        <div className="navbar-left flex items-center">
          <div className="navbar-brand cursor-pointer">
            <img
              src="https://argon-one.vercel.app/loo.webp"
              alt=""
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </div>
          <div className="navbar-links">
            <ul
              className={`list flex items-center ${isOpen ? "list-resp" : ""}`}
            >
              <li>
                <a href="https://argon-one.vercel.app/">Home</a>
              </li>
              <li>
                <a href="https://argon-one.vercel.app/products">Products</a>
              </li>
              <li>
                <a href="https://argon-one.vercel.app/#feature">Features</a>
              </li>
              <li>
                <a href="https://argon-one.vercel.app/#contact">Contact</a>
              </li>
              <button className="get-started btn-h" onClick={handleClickNavbar}>
                Get Started
              </button>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <button className="get-started btn-hh" onClick={handleClickNavbar}>
            Get Started
          </button>
          <div className="hamburger" onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0,0,256,256"
            >
              <g
                fill="#51018f"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ "mix-blend-mode": "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
