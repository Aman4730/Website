import React from "react";
import HowWeDoItComponents from "../../HowWeDoItComponents/HowWeDoItComponents";
import MainHeading from "../../MainHeading";

const MOVCDNER = () => {
  return (
    <div>
      <MainHeading
        title="MOVCDNER"
        subtitle="Mission Organic Value Chain Development for North East Region"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <HowWeDoItComponents />
    </div>
  );
};

export default MOVCDNER;
