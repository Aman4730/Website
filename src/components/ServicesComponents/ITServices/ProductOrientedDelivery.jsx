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
import node from "../../../Imges/language/node.png";
import react from "../../../Imges/language/react.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import SuccessStories from "../ServicesResueCom/SuccessStories";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
const ProductOrientedDelivery = () => {
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
      name: "Node.js",
      img: node,
      desc: "Fast, scalable, event-driven, non-blocking, real-time, API, JavaScript, backend, lightweight, efficient.",
    },
    {
      name: "React.js",
      img: react,
      desc: "Component-based, declarative, UI-library, virtual-DOM, JSX, reusable, hooks, frontend, SPA, interactive.",
    },
    {
      name: "Angular",
      img: Angular,
      desc: "TypeScript, MVC, two-way-binding, powerful, scalable, CLI, modular, enterprise, responsive.",
    },
    {
      name: "Android",
      img: android1,
      desc: "Mobile, Java, Kotlin, Play-Store, native, performance, UI, app-development, responsive, secure.",
    },
  ];
  return (
    <div>
      <MainHeading
        title="Product Oriented Delivery"
        subtitle="Product Oriented Delivery"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Product Delivery Features"
      />
      <ServiceLanguage languages={languages} />
      <SuccessStories />
    </div>
  );
};

export default ProductOrientedDelivery;
