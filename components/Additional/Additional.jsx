import React from "react";
import styles from "./Additional.css";

const Additional = () => {
  return (
    <>
      <div className="praise mx-auto text-center">
        <div className="praiseHeading gradient font-bold">
          <h1>
            Highest Quality, Powerful Gaming Solutions from <br />
            Argon Software!
          </h1>
        </div>
        <p className="font-bold">
          In most games, extra features are unlocked either by reaching next
          levels or by loading money. As Argon Software , we give you the
          opportunity to easily access these features. In addition, we also
          offer you powerful cheating features that are not available in other
          companies. All of our products are designed by ourselves and all have
          special codes.
        </p>
        <div className="praiseButtons">
          <button className="get-started-praise">Get Started</button>
          <button className="shop-now-praise">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Additional;
