"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 250,
    });
  }, []);

  return (
    <>
      <div
        className="hero flex items-center justify-between"
        data-aos="fade-up"
      >
        <div className="hero-texts flex flex-col">
          <div className="hero-header">
            <div className="header-p">
              <p>The Best in the Game</p>
            </div>
            <h1 className="text-7xl font-bold">
              WELCOME TO <br />
              <span className="gradient">ARGON SOFTWARE</span>
            </h1>
          </div>
          <div className="hero-para">
            <p>
              ARGON SOFTWARE™ is made to improve your overall gaming experience,
              Help you hit your shots again without spending thousands of hours
              playing Aim Trainers. The Ultimate Solution for daily gamers.
            </p>
          </div>
          <div className="hero-buttons text-white flex gap-7">
            <button
              className="discord"
              onClick={() => {
                window.open("https://discord.gg/6QhdZVXKe");
              }}
            >
              Discord
            </button>
            <button
              className="shop-now"
              onClick={() => {
                window.location.href = "/products";
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="hero-image">
          <video
            src="https://argon-one.vercel.app/video.webm"
            autoPlay
            muted
            loop
            width={750}
            style={{ border: "none", borderRadius: "8px" }}
          ></video>
        </div>
      </div>
    </>
  );
};

export default Hero;
