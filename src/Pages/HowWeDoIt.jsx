import React from "react";
import HowWeDoItComponents from "../components/HowWeDoItComponents";
import MainHeading from "../components/MainHeading";

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
    </div>
  );
};

export default HowWeDoIt;
