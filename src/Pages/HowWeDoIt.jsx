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
import HowWeDo from "../Imges/language/HowWeDo.png";
import HowWeDo1 from "../Imges/language/HowWeDo1.png";
import HowWeDo2 from "../Imges/language/HowWeDo2.png";
import HowWeDo3 from "../Imges/language/HowWeDo3.png";
import process_box_3_1 from "../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../assets/img/icon/process_box_3_3.svg";
import blog_12_1 from "../assets/img/blog/blog_12_1.jpg";
import blog_1_2 from "../assets/img/blog/blog_1_2.jpg";
import blog_12_3 from "../assets/img/blog/blog_12_3.jpg";
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
      img: HowWeDo3,
      desc: "Identifying inefficiencies, pain points, and areas of improvement to ensure a clear understanding of business challenges.",
    },
    {
      name: "Create Custom or Tailored Solutions",
      img: HowWeDo2,
      desc: "Crafting scalable, efficient, and sustainable software solutions based on gathered insights and unique business requirements.",
    },
    {
      name: "Take Feedback and Iterate",
      img: HowWeDo1,
      desc: "Presenting the developed solution for feedback, making necessary improvements to align perfectly with business needs.",
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
  const businessInfo = {
    title: "Role-Based Access Matrix",
    Subtitle: "Secure & Efficient Platform Utilization",
    BusinessData: [
      {
        id: 1,
        title: "Farmers",
        description:
          "Access to essential farming resources, real-time weather updates, and market prices to enhance productivity. Get expert advice, monitor crop health, optimize irrigation, access government schemes, receive pest alerts, and track soil quality insights. Utilize AI-driven analytics for better yield predictions, manage farm expenses efficiently, access digital marketplaces for selling produce, receive automated fertilizer recommendations, explore modern farming techniques, track climate patterns, and get real-time alerts on disease outbreaks.",
        image: blog_12_3,
        date: "25 Feb, 2024",
        author: "Logimetrix Team",
      },
      {
        id: 2,
        title: "Policymakers",
        description:
          "Comprehensive dashboard for tracking farming trends, analyzing policy impact, and making data-driven decisions. Includes market insights, subsidy distribution, and climate adaptation strategies.",
        image: blog_12_1,
        date: "20 Apr, 2024",
        author: "AgriTech Team",
      },
      {
        id: 3,
        title: "Admins",
        description:
          "Full control over user roles, content moderation, and system configurations to maintain platform security. Supports audit logs, automated reports, and user activity tracking.",
        image: blog_1_2,
        date: "20 Apr, 2024",
        author: "AgriTech Team",
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
      <BusinessPlanning blogData={businessInfo} space={true} />
      <CustomerRelationship />
      <OurDevelopmentMethodology processData={processData} />
    </div>
  );
};

export default HowWeDoIt;
