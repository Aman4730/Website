import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import faq_11_1 from "../../../assets/img/normal/faq_11_1.png";
import SolAbout2 from "./SolutionReuseCom/SolutionAbout/solAbout2";
import about_12_1 from "../../../assets/img/normal/about_12_1.jpg";
import about_12_3 from "../../../assets/img/normal/about_12_3.jpg";
import about_12_2 from "../../../assets/img/normal/about_12_2.jpg";
import OurExpertise from "./SolutionReuseCom/OurExpertises/OurExpertise";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import about_12_shape from "../../../assets/img/normal/about_12_shape.png";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import about_12_1_shape from "../../../assets/img/normal/about_12_1_shape.png";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import TalkToAbout5 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout5";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import CollaborationToolsIcon from "../../../Imges/QblockIcon/CollaborationToolsIcon.jpg";
import UserGuestDeactivationIcon from "../../../Imges/QblockIcon/UserGuestDeactivationIcon.jpg";
import StorageQuotaManagementIcon from "../../../Imges/QblockIcon/StorageQuotaManagementIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "“Streamline dairy operations with automated milk disposal tracking, ensuring efficient supply chain management, accurate record-keeping, and minimal wastage.”",
    img: DocumentsStorageIcon,
    name: "Automated Milk Disposal",
    designation: "",
  },
  {
    text: "“Maintain detailed animal records, including pedigree, health history, and breeding information, to improve livestock management and optimize dairy productivity.”",
    img: VersionControlIcon,
    name: "Animal Records Management",
    designation: "",
  },
  {
    text: "“Track and manage fodder, calcium, minerals, medicines, and other inventory resources efficiently to ensure proper livestock nutrition and health.”",
    img: AccessControlIcon,
    name: "Stock & Inventory Management",
    designation: "",
  },
  {
    text: "“Monitor cattle breeding cycles, heat dates, and service records while integrating with breeding centers for improved livestock reproduction and productivity.”",
    img: DocumentsRetrievalIcon,
    name: "Cattle Service Register",
    designation: "",
  },
  {
    text: "“Digitally manage and analyze cattle health and productivity with comprehensive records of milk yield, lactation cycles, vaccination schedules, and service history.”",
    img: WorkflowAutomationIcon,
    name: "Cattle History Sheet",
    designation: "",
  },
  {
    text: "“Enhance agricultural productivity with GIS-based field mapping, providing real-time insights into farm resources, crop growth patterns, and field agent activities.”",
    img: CollaborationToolsIcon,
    name: "GIS-Based Field Mapping",
    designation: "",
  },
  {
    text: "“Monitor the distribution of seeds and chemicals, ensuring efficient allocation, reducing waste, and improving overall agricultural sustainability.”",
    img: AuditTrailsIcon,
    name: "Seed & Chemical Distribution Monitoring",
    designation: "",
  },
  {
    text: "“Ensure financial transparency and better budgeting with a detailed expense register for dairy and agricultural operations.”",
    img: StorageQuotaManagementIcon,
    name: "Expense Register & Financial Management",
    designation: "",
  },
  {
    text: "“Track vaccination schedules with real-time alerts and records to ensure livestock health and disease prevention.”",
    img: UserGuestDeactivationIcon,
    name: "Livestock Vaccination Tracking",
    designation: "",
  },
  {
    text: "“Monitor milk distribution data, including rate calculations and byproduct analysis, ensuring smooth operations and profitability in the dairy industry.”",
    img: AutoBackupIcon,
    name: "Daily Milk Distribution Report",
    designation: "",
  },
];
const ExpertiseArray = {
  heading: "IoT-Enabled Dairy & Agricultural Solutions",
  para: "Leveraging IoT and data analytics to revolutionize dairy farming and agriculture, ensuring real-time livestock monitoring, efficient milk production, and smart farm management.",
  keyPoints: [
    { name: "Automated Dairy Management", per: "98%" },
    { name: "Livestock Health & Breeding Tracking", per: "96%" },
    { name: "GIS-Based Agricultural Monitoring", per: "97%" },
    { name: "Digital Resource & Inventory Management", per: "95%" },
    { name: "Predictive Crop & Livestock Analytics", per: "96%" },
  ],
};
const aboutData2 = {
  title: "Smart Dairy & Agricultural Management",
  subtitle: "Enhancing Dairy & Agriculture with IoT and Data Analytics",
  description:
    "Our cutting-edge IoT-driven solutions provide intelligent automation, real-time tracking, and data-driven insights to optimize dairy and agricultural operations. From managing livestock health to predictive analytics for crops, we ensure transparency, efficiency, and sustainability.",
  features: [
    "Automated record-keeping for milk disposal, animal health, and breeding cycles.",
    "GPS-based land mapping and field monitoring for better resource management.",
    "Smart tracking of seeds, chemicals, and farm inputs to maximize yield and sustainability.",
  ],
  images: [about_12_1, about_12_3, about_12_2],
  shapeImages: [about_12_shape, about_12_1_shape],
  demoLink: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
  trialLink: "https://dairycroptech.com/home/landing",
};
const TalkToAbout5Array = {
  title: "Talk to Us About Any",
  highlight: "Question?",
  subtitle: "Frequently Asked Questions",
  image: faq_11_1,
  faqs: [
    {
      question:
        "What is the purpose of the Dairy & Agricultural Management System?",
      answer:
        "Our system streamlines dairy and agricultural operations by automating record-keeping, tracking livestock health, managing inventory, and optimizing supply chains for improved productivity.",
    },
    {
      question: "How does the system track livestock health?",
      answer:
        "The system uses IoT-based sensors and digital records to monitor cattle health, vaccination schedules, breeding cycles, and overall productivity.",
      defaultOpen: true,
    },
    {
      question: "Can the system manage milk disposal and distribution?",
      answer:
        "Yes, it automates milk disposal records, tracks distribution, and calculates rates while ensuring accurate data management and minimal wastage.",
    },
    {
      question: "Does this solution support GIS-based agricultural tracking?",
      answer:
        "Absolutely! Our system integrates GIS mapping to monitor land usage, seed distribution, and optimize agricultural planning for better crop yield and resource management.",
    },
    {
      question: "How can I get started with this solution?",
      answer:
        "You can get started by contacting our team for a demo, exploring the features, and selecting a plan that fits your dairy or agricultural business needs.",
    },
  ],
};

const CropnetPage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="Cropnet"
        subtitle="Cropnet"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="100px"
      />
      <SolAbout2 aboutData={aboutData2} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout5 TalkToAbout5Array={TalkToAbout5Array} />
    </div>
  );
};

export default CropnetPage;
