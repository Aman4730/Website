import React from "react";
import ServiceAboutUs1 from "../ServicesResueCom/ServiceAboutUs1";
import MainHeading from "../../MainHeading";
import ServiceWhatWeDo1 from "../ServicesResueCom/ServiceWhatWeDo1";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import ConnectTeam from "../../ConnectTeam";

const POCDevelopment = () => {
  return (
    <div>
      <MainHeading
        title="POC Development"
        subtitle="POC Development"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAboutUs1 />
      <ServiceWhatWeDo1 />
      <SuccessStories />
      <ConnectTeam />
    </div>
  );
};

export default POCDevelopment;
