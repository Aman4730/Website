import React from "react";
import MainHeading from "../components/MainHeading";
import CaseStudies from "../components/BlogSection/GalleryComponents/CaseStudies";
import TeamMembers from "../components/BlogSection/GalleryComponents/TeamMembers";
import WhyChooseUsGal from "../components/BlogSection/GalleryComponents/WhyChooseUsGal";
import Photos from "../components/BlogSection/GalleryComponents/Photos";

const GalleryPage = () => {
  return (
    <div>
      <MainHeading
        title="Gallery"
        subtitle="Gallery"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
      />
      <CaseStudies />
      <TeamMembers />
      <WhyChooseUsGal />
      <Photos />
    </div>
  );
};

export default GalleryPage;
