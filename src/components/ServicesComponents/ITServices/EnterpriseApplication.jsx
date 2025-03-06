import React from "react";
import SEO from "../../../Imges/SEO1.jpg";
import MainHeading from "../../MainHeading";
import Digital from "../../../Imges/Digital.jpg";
import blog_1_1 from "../../../assets/img/blog/blog_1_1.jpg";
import blog_1_2 from "../../../assets/img/blog/blog_1_2.jpg";
import blog_1_3 from "../../../assets/img/blog/blog_1_3.jpg";
import blog_1_4 from "../../../assets/img/blog/blog_1_4.jpg";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import DataCentralization from "../../../Imges/DataCentralization.jpg";
import ScalabilitySecurity from "../../../Imges/ScalabilitySecurity.png";

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
      img: SEO,
      desc: "Modernize legacy systems with cloud-native architectures",
    },
    {
      name: "Process Optimization",
      img: Digital,
      desc: "Automate workflows across business units",
    },
    {
      name: "Data Centralization",
      img: DataCentralization,
      desc: "Unified data platform for enterprise-wide insights",
    },
    {
      name: "Scalability & Security",
      img: ScalabilitySecurity,
      desc: "Ensure enterprise growth with robust, secure, and scalable solutions",
    },
  ];
  const blogData = {
    title: "Recent POD Success",
    subtitle: "Success & Stories",
    shadowTitle: "Update",
    posts: [
      {
        img: blog_1_1,
        date: "15 Jan, 2024",
        comments: 2,
        title: "Enterprise SaaS Platform",
        link: "/contactUs",
        desc: "60% faster time-to-market with agile development and cloud-native architecture.",
      },
      {
        img: blog_1_2,
        date: "16 Jan, 2024",
        comments: 3,
        title: "Mobile Banking Solution",
        link: "/contactUs",
        desc: "2M+ users onboarded within the first 6 months, ensuring seamless transactions and security.",
      },
      {
        img: blog_1_3,
        date: "17 Jan, 2024",
        comments: 2,
        title: "AI E-Commerce Analytics",
        link: "/contactUs",
        desc: "30% increase in customer retention through data-driven insights and personalized recommendations.",
      },
      {
        img: blog_1_4,
        date: "19 Jan, 2024",
        comments: 4,
        title: "Telehealth App",
        link: "/contactUs",
        desc: "Reduced patient wait times by 50% with an intuitive and secure digital consultation platform.",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="Enterprise Application Solutions"
        subtitle="Enterprise Application Solutions"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Enterprise Application Solutions"
      />
      <ServiceLanguage languages={languages} />
      <SuccessStories data={blogData} />
    </div>
  );
};

export default EnterpriseApplication;
