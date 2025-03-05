import React from "react";
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
      <HowWeDoAbout />
      <BusinessPlanning />
      <CustomerRelationship />
    </div>
  );
};

export default HowWeDoIt;
