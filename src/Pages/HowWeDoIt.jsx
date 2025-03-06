import React from "react";
import MainHeading from "../components/MainHeading";
import HowWeDoAbout from "../components/HowWeDoItComponents/HowWeDoAbout";
import BusinessPlanning from "../components/HowWeDoItComponents/BusinessPlanning";
import CustomerRelationship from "../components/HowWeDoItComponents/CustomerRelationship";
import ServiceWhatWeDo2 from "../components/ServicesComponents/ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../assets/img/icon/service_7_1.svg";
import service_7_2 from "../assets/img/icon/service_7_2.svg";
import service_7_3 from "../assets/img/icon/service_7_3.svg";
import OurDevelopmentMethodology from "../components/ServicesComponents/ServicesResueCom/OurDevelopmentMethodology";
import ServiceLanguage from "../components/ServicesComponents/ServicesResueCom/ServiceLanguage";
import react from "../Imges/language/react.png";
import Angular from "../Imges/language/Angular.png";
import HowWeDo from "../Imges/HowWeDo.png";
import process_box_3_1 from "../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../assets/img/icon/process_box_3_3.svg";
const HowWeDoIt = () => {
  const services = [
    {
      img: service_7_1,
      title: "Google Cloud Platform",
      desc: "Stop chasing leads and attract them with targeted campaigns. Webteck's suite of tools, including...",
      link: "service-details.html",
    },
    {
      img: service_7_2,
      title: "Amazon Web Services",
      desc: "Increase conversions with AI-powered insights and automation tools for your business success...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "Microsoft Azure",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "Snowflake",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
    {
      img: service_7_1,
      title: "Tableau",
      desc: "Stop chasing leads and attract them with targeted campaigns. Webteck's suite of tools, including...",
      link: "service-details.html",
    },
    {
      img: service_7_2,
      title: "Microsoft PowerBI",
      desc: "Increase conversions with AI-powered insights and automation tools for your business success...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "ThoughtSpot",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "Databricks",
      desc: "Maximize your return on investment with data-driven marketing strategies and AI-driven solutions...",
      link: "service-details.html",
    },
  ];
  const languages = [
    {
      name: "Consult with Clients and Gather Requirements",
      img: HowWeDo,
      desc: "Understanding business goals, challenges, and vision to gather exact requirements for a tailored solution.",
    },
    {
      name: "Analyze the Client's Pain Points",
      img: react,
      desc: "Identifying inefficiencies, pain points, and areas of improvement to ensure a clear understanding of business challenges.",
    },
    {
      name: "Create Custom or Tailored Solutions",
      img: Angular,
      desc: "Crafting scalable, efficient, and sustainable software solutions based on gathered insights and unique business requirements.",
    },
    {
      name: "Take Feedback and Iterate",
      img: Angular,
      desc: "Presenting the developed solution for feedback, making necessary improvements to align perfectly with business needs.",
    },
    {
      name: "Grow Together",
      img: Angular,
      desc: "Building long-term relationships, optimizing solutions as the business evolves, and ensuring continued success.",
    },
    {
      name: "Deliver Excellence",
      img: Angular,
      desc: "Ensuring a high-quality, fully functional solution with ongoing maintenance and innovation for long-term success.",
    },
  ];
  const processData = {
    title: "Our Solution for Your Business",
    subtitle: "Stockie Operation Across the World",
    description:
      "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.",
    buttonText: "Get Started Now",
    buttonLink: "contact.html",
    steps: [
      {
        id: 1,
        img: process_box_3_1,
        title: "Finance Security",
        desc: "Party we years to order allow asked of. We so opinion friends me message as delight. sit abet pulvinar arco dap bus.",
        link: "service-details.html",
      },
      {
        id: 2,
        img: process_box_3_2,
        title: "Synchronization",
        desc: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
        link: "service-details.html",
      },
      {
        id: 3,
        img: process_box_3_3,
        title: "Cloud Drive",
        desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
        link: "service-details.html",
      },
    ],
  };
  return (
    <div>
      <MainHeading
        title="How we do it"
        subtitle="How we do it"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="70px"
      />
      <HowWeDoAbout />
      <ServiceLanguage languages={languages} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Product Delivery Features"
      />
      <BusinessPlanning />
      <CustomerRelationship />
      <OurDevelopmentMethodology processData={processData} />
    </div>
  );
};

export default HowWeDoIt;
