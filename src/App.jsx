import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
// import PostWrite from "./components/PostWrite";
import TeamSection from "./components/TeamSection";
import Newsletter from "./components/Newsletter";

import Tailor from "./components/Tailor";

// import PostsView from "./components/PostsView";

import Header2 from "./components/Header2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header2 />

      <Feature1 />
      <Feature2 />
      <Tailor />
      <CTA />
      <TeamSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
