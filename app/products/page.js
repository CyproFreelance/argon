import React from "react";
import styles from "./page.css";
import Navbar from "@/components/Navbar";
import Cards from "./components/Cards";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Navbar/>
      <Cards/>
      <Footer/>
    </>
  );
};

export default page;
