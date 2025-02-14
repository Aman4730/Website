import React from "react";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import Services from "../components/Services";
import HappyClient from "../components/HappyClient";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUS";
import HowToWork from "../components/HowToWork";
import TechnologySolutions from "../components/TechnologySolutions";
import ChooseUS from "../components/ChooseUS";
import OurExpertise from "../components/OurExpertise";
import OurClient from "../components/OurClient";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <AboutUS />
      <HowToWork />
      <HappyClient />
      <TechnologySolutions />
      <ChooseUS />
      <OurExpertise />
      <OurClient />
    </div>
  );
};

export default Home;
