import React from "react";

import HowWeDoItComponents from "../components/HowWeDoItComponents";
import MainHeading from "../components/MainHeading";

import MainHeading from "../components/MainHeading";
import HowWeDoAbout from "../components/HowWeDoItComponents/HowWeDoAbout";
import BusinessPlanning from "../components/HowWeDoItComponents/BusinessPlanning";
import CustomerRelationship from "../components/HowWeDoItComponents/CustomerRelationship";


const HowWeDoIt = () => {
  return (
    <div>
      <MainHeading
        title="How we do it"
        subtitle="How we do it"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="70px"
      />

      <HowWeDoItComponents />

      <HowWeDoAbout />
      <BusinessPlanning />
      <CustomerRelationship />

    </div>
  );
};

export default HowWeDoIt;
