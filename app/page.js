"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Shop from "@/components/Shop/Shop";
import Steps from "@/components/Steps/Steps";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Extra from "@/components/Extra/Extra";

export default function App() {
  return (
    <div className="wrapper" data-scroll data-scroll-container>
      <Navbar />
      <Hero />
      <Features />
      <Extra />
      <Shop />
      <Steps />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
