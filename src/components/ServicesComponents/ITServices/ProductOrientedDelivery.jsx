import React from "react";
import MainHeading from "../../MainHeading";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceWhatWeDo from "../ServicesResueCom/ServiceWhatWeDo";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import service_6_1 from "../../../assets/img/icon/service_6_1.svg";
import service_6_2 from "../../../assets/img/icon/service_6_2.svg";
import service_6_3 from "../../../assets/img/icon/service_6_3.svg";
import service_6_4 from "../../../assets/img/icon/service_6_4.svg";
import Ourworkthatinspired from "../ServicesResueCom/Ourworkthatinspired";
import service_featured_1 from "../../../assets/img/icon/service_featured_1.svg";
import service_featured_2 from "../../../assets/img/icon/service_featured_2.svg";
import service_featured_3 from "../../../assets/img/icon/service_featured_3.svg";
import service_featured_4 from "../../../assets/img/icon/service_featured_4.svg";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import Kubernetes from "../../../Imges/language/Kubernetes.jpg";
import react from "../../../Imges/language/react.png";
import AWS from "../../../Imges/language/AWS.png";
import docker from "../../../Imges/language/docker.jpg";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import blog_1_1 from "../../../assets/img/blog/blog_1_1.jpg";
import blog_1_2 from "../../../assets/img/blog/blog_1_2.jpg";
import blog_1_3 from "../../../assets/img/blog/blog_1_3.jpg";
import blog_1_4 from "../../../assets/img/blog/blog_1_4.jpg";
const ProductOrientedDelivery = () => {
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
  const aboutFeatures = {
    title: "Product Oriented Delivery",
    heading: "What’s behind LOGIMETRIX guaranteed delivery",
    aboutus:
      "With LOGIMETRIX' product-oriented delivery, we ensure your software vision transforms into a superior solution within your timeline and budget constraints. Our approach guarantees a quick start with a complementary product definition phase, allowing us to align swiftly with your project. We prioritize flexibility while keeping costs in check, ensuring your success is our success. By taking full responsibility for delivering your strategic plan, we maximize your solution’s business value and provide a tailored product that meets your business objectives. With complete transparency and a strong focus on business goals, we guarantee results as stated in the contract.",
    asd: [
      {
        title: "Quick Start & Flexibility",
        text: "We ensure a fast project kickoff with a structured approach while staying within your budget constraints.",
      },
      {
        title: "Guaranteed Business Value",
        text: "We take full responsibility for delivering a tailored solution that aligns with your strategic goals and business objectives.",
      },
    ],
  };
  const services = [
    {
      img: service_7_1,
      title: "Agile Product Development",
      desc: "Stop chasing leads and attract them with targeted campaigns. Webteck's suite of tools, including...",
      link: "service-details.html",
    },
    {
      img: service_7_2,
      title: "Continuous Integration",
      desc: "Increase conversions with AI-powered insights and automation tools for your business success...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "Scalable Architecture",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "DevOps Integration",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
  ];
  const languages = [
    {
      name: "React.js",
      img: react,
      desc: "A JavaScript library for building user interfaces using a component-based approach with a virtual DOM for efficient rendering.",
    },
    {
      name: "Kubernetes",
      img: Kubernetes,
      desc: "A container orchestration platform that automates deployment, scaling, and management of containerized applications in cloud environments.",
    },
    {
      name: "AWS",
      img: AWS,
      desc: "A comprehensive cloud computing service that provides scalable infrastructure, storage, and computing power for enterprises and developers.",
    },
    {
      name: "Docker",
      img: docker,
      desc: "A lightweight containerization platform that simplifies application deployment by ensuring consistency across multiple environments efficiently.",
    },
  ];

  return (
    <div>
      <MainHeading
        title="Product Oriented Delivery"
        subtitle="Product Oriented Delivery"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Product Delivery Features"
      />
      <ServiceLanguage languages={languages} />
      <SuccessStories data={blogData} />
    </div>
  );
};

export default ProductOrientedDelivery;
