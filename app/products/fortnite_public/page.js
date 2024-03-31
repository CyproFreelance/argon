import React from "react";
import styles from "./page.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import Product from "./components/Product";

const page = () => {
  return (
    <>
      <Navbar></Navbar>
      <Product></Product>
      <Footer></Footer>
    </>
  );
};

export default page;
