"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./FAQ.css";
import { useState } from "react";

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);
  let [isQuestion1Open, setisQuestion1Open] = useState(0);
  let [isQuestion2Open, setisQuestion2Open] = useState(0);
  let [isQuestion3Open, setisQuestion3Open] = useState(0);
  let [isQuestion4Open, setisQuestion4Open] = useState(0);
  let [isQuestion5Open, setisQuestion5Open] = useState(0);

  return (
    <>
      <div className="faq mx-auto" data-aos="fade-in">
        <div className="sectionHeading font-semibold text-center">
          <h1 className="gradient">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="less">
            Please take a moment to read through the information below to see if
            it answers any of your questions. If you can't find the answers
            you're looking for, you're welcome to create a support ticket on our
            Discord Server for extra help.
          </div>
        </div>
        <div className="fluids" data-aos="fade-up">
          <div
            className="fluid cursor-pointer"
            onClick={() => {
              setisQuestion1Open(!isQuestion1Open);
            }}
          >
            <div className="fluid-left">
              <div className="qna">
                <div className="question question_1">
                  <h1 className="font-bold">
                    1) Is Argon Fortnite Tournament UD ?
                  </h1>
                </div>
                <div
                  className={`answer answer_1 ${isQuestion1Open ? "show" : ""}`}
                >
                  A: Argon Fortnite is made for Tournaments, we guarantee safety
                  as this is one of the only Public cheats that is undetected
                  when playing Cups
                </div>
              </div>
              <div className={`plus ${isQuestion1Open ? "rotate" : ""}`}>
                <img src="https://argon-one.vercel.app/image-18.webp" alt="" />
              </div>
            </div>
          </div>
          <div
            className="fluid cursor-pointer"
            onClick={() => {
              setisQuestion2Open(!isQuestion2Open);
            }}
          >
            <div className="fluid-left">
              <div className="qna">
                <div className="question question_2">
                  <h1 className="font-bold">
                    2) Does the spoofer work on Tournaments ?
                  </h1>
                </div>
                <div
                  className={`answer answer_2 ${isQuestion2Open ? "show" : ""}`}
                >
                  A: Yes, Argon Software is fully compatible with Tournaments
                  and Cups.
                </div>
              </div>
              <div className={`plus ${isQuestion2Open ? "rotate" : ""}`}>
                <img src="https://argon-one.vercel.app/image-18.webp" alt="" />
              </div>
            </div>
          </div>
          <div
            className="fluid cursor-pointer"
            onClick={() => {
              setisQuestion3Open(!isQuestion3Open);
            }}
          >
            <div className="fluid-left">
              <div className="qna">
                <div className="question question_3">
                  <h1 className="font-bold">
                    3) Does the spoofer need a PC reset ?
                  </h1>
                </div>
                <div
                  className={`answer answer_3 ${isQuestion3Open ? "show" : ""}`}
                >
                  A: No, Argon Spoofer does not require a windows format. We
                  have a built-in trace cleaner and deep cleaner for traces you
                  get after a ban. Use that along with our perm/temp module and
                  you should be good to go.
                </div>
              </div>
              <div className={`plus ${isQuestion3Open ? "rotate" : ""}`}>
                <img src="https://argon-one.vercel.app/image-18.webp" alt="" />
              </div>
            </div>
          </div>
          <div
            className="fluid cursor-pointer"
            onClick={() => {
              setisQuestion4Open(!isQuestion4Open);
            }}
          >
            <div className="fluid-left">
              <div className="qna">
                <div className="question question_4">
                  <h1 className="font-bold">
                    4) Is there a temporary or permanent module ?
                  </h1>
                </div>
                <div
                  className={`answer answer_4 ${isQuestion4Open ? "show" : ""}`}
                >
                  A: Yes! Argon Spoofer supports both Temp & Perm for all of the
                  games we support. Both features are tournament undetected and
                  bypasses the 1 report ban. We have been undetected from
                  EAC/BE/RICOCHET/VANGAURD for more than 1 Year.
                </div>
              </div>
              <div className={`plus ${isQuestion4Open ? "rotate" : ""}`}>
                <img src="https://argon-one.vercel.app/image-18.webp" alt="" />
              </div>
            </div>
          </div>
          <div
            className="fluid cursor-pointer"
            onClick={() => {
              setisQuestion5Open(!isQuestion5Open);
            }}
          >
            <div className="fluid-left">
              <div className="qna">
                <div className="question question_5">
                  <h1 className="font-bold">
                    5) Is Argon Fortnite 100% undetected ?
                  </h1>
                </div>
                <div
                  className={`answer answer_5 ${isQuestion5Open ? "show" : ""}`}
                >
                  A: Yes! Argon Spoofer supports both Temp & Perm for all of the
                  games we support. Both features are tournament undetected and
                  bypasses the 1 report ban. We have been undetected from
                  EAC/BE/RICOCHET/VANGAURD for more than 1 Year.
                </div>
              </div>
              <div className={`plus ${isQuestion5Open ? "rotate" : ""}`}>
                <img src="https://argon-one.vercel.app/image-18.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
