"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Steps.css";

const Steps = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);
  return (
    <>
      <div className="steps mx-auto">
        <div className=" sectionHeading font-bold" data-aos="fade-in">
          <p>WANT TO USE ? </p>
          <h1 className="gradient">HOW DOES IT WORK ?</h1>
        </div>
        <div className="cards-steps">
          <div className="card-row-steps">
            <div className="card-steps" data-aos="fade-up">
              <div className="card-image-steps">
                <img src="https://argon-one.vercel.app/image 11.webp" alt="" />
              </div>
              <div className="stepno font-bold">STEP 1</div>
              <div className="card-text">CHOOSE YOUR PRODUCT</div>
            </div>
            <div className="card-steps" data-aos="fade-up">
              <div className="card-image-steps">
                <img src="https://argon-one.vercel.app/image 13.webp" alt="" />
              </div>
              <div className="stepno font-bold">STEP 2</div>
              <div className="card-text">CHECKOUT NOW</div>
            </div>
          </div>
          <div className="card-row-steps">
            <div className="card-steps" data-aos="fade-up">
              <div className="card-image-steps">
                <img src="https://argon-one.vercel.app/image 14.webp" alt="" />
              </div>
              <div className="stepno font-bold">STEP 3</div>
              <div className="card-text">PURCHASE & INSTRUCTIONS</div>
            </div>
            <div className="card-steps" data-aos="fade-up">
              <div className="card-image-steps">
                <img src="https://argon-one.vercel.app/image-15.webp" alt="" />
              </div>
              <div className="stepno font-bold">STEP 4</div>
              <div className="card-text">DELIVERY & ENJOY YOUR PRODUCT</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
