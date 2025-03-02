import React from "react";
import MainHeading from "../../MainHeading";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import node from "../../../Imges/language/node.png";
import react from "../../../Imges/language/react.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
const EnterpriseApplication = () => {
  const aboutFeatures = {
    title: "Enterprise Application Solutions",
    heading: "What you get with LOGIMETRIX enterprise applications",
    aboutus:
      "We provide top-tier enterprise solutions with customization options and expert support. With 12+ years of experience, we specialize in custom software and seamless integrations across industries like finance, logistics, healthcare, and more. Our certified team partners with SAP, Microsoft, Odoo, and Salesforce to deliver secure, high-performance solutions.",
    asd: [
      {
        title: "Fast & Flexible",
        text: "Quick project initiation with a structured, budget-friendly approach.",
      },
      {
        title: "Business-Centric",
        text: "Tailored solutions that align with your goals and ensure maximum value.",
      },
    ],
  };

  const services = [
    {
      img: service_7_1,
      title: "ERP Solutions",
      desc: "Stop chasing leads and attract them with targeted campaigns. Webteck's suite of tools, including...",
      link: "service-details.html",
    },
    {
      img: service_7_2,
      title: "CRM Systems",
      desc: "Increase conversions with AI-powered insights and automation tools for your business success...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "SCM Platforms",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
  ];
  const languages = [
    {
      name: "Digital Transformation",
      img: node,
      desc: "Modernize legacy systems with cloud-native architectures",
    },
    {
      name: "Process Optimization",
      img: react,
      desc: "Automate workflows across business units",
    },
    {
      name: "Data Centralization",
      img: Angular,
      desc: "Unified data platform for enterprise-wide insights",
    },
    {
      name: "Scalability & Security",
      img: android1,
      desc: "Ensure enterprise growth with robust, secure, and scalable solutions",
    },
  ];
  return (
    <div>
      <MainHeading
        title="Enterprise Application Solutions"
        subtitle="Enterprise Application Solutions"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Enterprise Application Solutions"
      />
      <ServiceLanguage languages={languages} />
      <SuccessStories />
    </div>
  );
};

export default EnterpriseApplication;
