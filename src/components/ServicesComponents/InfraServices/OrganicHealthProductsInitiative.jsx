import React from "react";
import about_18_1 from "../../../assets/img/normal/about_18_1.jpg";
import about_18_2 from "../../../assets/img/normal/about_18_2.jpg";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import SolAbout1 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout1";
import MainHeading from "../../MainHeading";
import faq_11_1 from "../../../assets/img/normal/faq_11_1.png";
import SolAbout3 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout3";
import TalkToAbout5 from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout5";
const OrganicHealthProductsInitiative = () => {
  const aboutData1 = {
    title: "Organic Health",
    subtitle: "Organic Health Products Initiative",
    description:
      "In 2024, Logimetrix Techsolutions Pvt. Ltd. partnered with Syscom Organic World Pvt. Ltd. to enter the organic health products sector. This initiative goes beyond sustainable procurement and distribution, covering a wide range of organic cosmetic products. Our goal is not just to bring high-quality, chemical-free products to the market but also to develop a strong supply chain beneficial for both vendors and customers. This partnership promotes sustainable practices and provides consumers with a trusted, natural alternative.",
    features: [],
    images: [about_11_1, about_11_2, about_11_3],
    titleShape: title_shape_2,
    experienceYears: 12,
    experienceText: "Years of experience in startup building",
    videoLink: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
  };

  const aboutData3 = [
    {
      id: 1,
      images: [about_18_1, about_18_2],
      experienceCount: 50,
      experienceText: "Happy Clients",
      shadowTitle: "Our Vision",
      subTitle: "Organic Health Products Initiative",
      secTitle: "Our Vision & Commitment",
      description:
        "At Logimetrix Techsolutions, we aim to redefine industry standards through innovation and customer-centric solutions, contributing to a growing organic market. Our commitment to sustainability ensures that every product meets high-quality standards while supporting eco-friendly practices.",
      checklist: [
        [
          "Ethically Sourced Organic Raw Materials",
          "Strong Vendor Partnerships",
        ],
        [
          "Eco-Friendly & Sustainable Packaging",
          "Innovative Consumer Awareness Strategies",
        ],
      ],
      contactLink: "about.html",
      phone: "+993-554-0006",
    },
  ];
  const TalkToAbout5Array = {
    title: "Organic Farming Why Choose Our Organic",
    highlight: " Products?",
    subtitle: "Committed to Quality & Sustainability",
    image: faq_11_1,
    faqs: [
      {
        question: "What makes your organic products premium quality?",
        answer:
          "Our products are made from certified organic ingredients sourced from ethical farms worldwide, ensuring purity and sustainability.",
      },
      {
        question: "How are your products eco-friendly?",
        answer:
          "We use biodegradable packaging and carbon-neutral shipping methods to minimize environmental impact.",
        defaultOpen: true,
      },
      {
        question: "Are your products safe for all skin types?",
        answer:
          "Yes, our skincare and health products are formulated by expert nutritionists and dermatologists to be safe and effective for all skin types.",
      },
      {
        question: "Do you have any certifications for your organic products?",
        answer:
          "Yes, our products are certified by leading organic certification bodies to ensure quality, safety, and sustainability.",
      },
    ],
  };

  return (
    <div>
      <MainHeading
        title="Organic Health Products Initiative"
        subtitle="Organic Health Products Initiative"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout1 aboutData={aboutData1} />
      <SolAbout3 aboutData={aboutData3} />
      <TalkToAbout5 TalkToAbout5Array={TalkToAbout5Array} />
    </div>
  );
};

export default OrganicHealthProductsInitiative;
