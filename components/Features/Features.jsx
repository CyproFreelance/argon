"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Features.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <>
      <div className="features mx-auto" id="feature">
        <div className="sectionHeading">
          <p>WHY CHOOSE US ?</p>
          <h1 className="gradient font-bold">FEATURES</h1>
        </div>
        <div className="cards">
          <div className="card" data-aos="fade-up">
            <div className="card-img">
              <img src="https://argon-one.vercel.app/image 3.webp" alt="" />
            </div>
            <div className="card-feature">
              <h1>100% Secure</h1>
            </div>
            <div className="card-details">
              <p>
                Our platform is 100% secure, giving you peace of mind while you
                focus on mastering your game. Say goodbye to worries and hello
                to uninterrupted gaming bliss.
              </p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-img">
              <img src="https://argon-one.vercel.app/image-32.webp" alt="" />
            </div>
            <div className="card-feature">
              <h1>Best Prices</h1>
            </div>
            <div className="card-details">
              <p>
                Say goodbye to overpriced alternatives and hello to
                affordability without compromise. Elevate your gaming experience
                without breaking the bank.
              </p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-img">
              <img src="https://argon-one.vercel.app/image-27.webp" alt="" />
            </div>
            <div className="card-feature">
              <h1>Highest Quality</h1>
            </div>
            <div className="card-details">
              <p>
                Experience unparalleled excellence in performance, reliability,
                and user satisfaction. We set the bar high so you can aim even
                higher.
              </p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-img">
              <img src="https://argon-one.vercel.app/image-34.webp" alt="" />
            </div>
            <div className="card-feature">
              <h1>Undetected</h1>
            </div>
            <div className="card-details">
              <p>
                Our cutting-edge technology ensures you remain invisible to
                prying eyes, giving you the edge you need to dominate without
                detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
