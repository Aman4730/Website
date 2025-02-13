import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import about_2_1 from "../../../assets/img/normal/about_2_1.jpg";
import about_2_2 from "../../../assets/img/normal/about_2_2.jpg";
import about_2_3 from "../../../assets/img/normal/about_2_3.jpg";
import SolAbout from "./SolutionReuseCom/SolutionAbout/SolAbout";
import about_2_shape from "../../../assets/img/normal/about_2_shape.png";
import OurExpertise from "./SolutionReuseCom/OurExpertises/OurExpertise";
import RecycleBinIcon from "../../../Imges/QblockIcon/RecycleBinIcon.jpg";
import AutoBackupIcon from "../../../Imges/QblockIcon/AutoBackupIcon.jpg";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AuditTrailsIcon from "../../../Imges/QblockIcon/AuditTrailsIcon.jpg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import TalkToAbout2 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout2";
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
    text: "“Track workforce performance in real-time, optimize daily tasks, improve communication, and ensure better field operations with precise data insights, helping businesses boost productivity and manage teams effectively.”",
    img: DocumentsStorageIcon,
    name: "TrakMob",
    designation: "Salesforce Tracking Solution",
  },
  {
    text: "“Simplify school operations with a powerful ERP system that enhances administrative efficiency, automates routine tasks, tracks student performance, and provides seamless communication between teachers, parents, and students.”",
    img: DocumentsRetrievalIcon,
    name: "Eklavya",
    designation: "School Management Solution",
  },
  {
    text: "“Prevent fuel leaks, unauthorized usage, and monitor consumption with real-time tracking. Ensure complete transparency, optimize fuel expenses, detect anomalies early, and reduce wastage with an automated fuel management system.”",
    img: WorkflowAutomationIcon,
    name: "TrakFuel",
    designation: "Fuel Management System",
  },
  {
    text: "“Gain deep insights into student learning, track academic progress, and analyze performance trends with data-driven analytics, fostering a competitive learning environment that encourages growth and skill development.”",
    img: CollaborationToolsIcon,
    name: "Absolute Study",
    designation: "Student Learning & Competition Platform",
  },
  {
    text: "“Optimize logistics operations, monitor supply chain activities, prevent resource mismanagement, and automate tracking to ensure real-time visibility, better planning, reduced delays, and improved efficiency in business workflows.”",
    img: UserGuestDeactivationIcon,
    name: "Trak",
    designation: "Logistics & Tracking System",
  },
];

const ExpertiseArray = {
  heading: "Standalone Products",
  para: "Our suite of solutions empowers businesses with advanced tracking, management, and automation tools to enhance efficiency, security, and performance.",
  keyPoints: [
    { name: "Real-time Workforce Tracking", per: "98%" },
    { name: "Automated School Management", per: "95%" },
    { name: "Fuel Monitoring & Cost Savings", per: "92%" },
    { name: "Advanced Learning & Student Insights", per: "90%" },
    { name: "Optimized Logistics & Resource Management", per: "94%" },
  ],
};

const TalkToAbout2Array = [
  {
    id: 1,
    question: "How does TrakMob improve workforce management?",
    answer:
      "TrakMob allows businesses to track employee activities in real time, optimize task assignments, and enhance communication between field staff and managers.",
  },
  {
    id: 2,
    question: "Can Eklavya streamline school operations effectively?",
    answer:
      "Yes! Eklavya offers an all-in-one ERP system for school administration, making it easier for principals, teachers, and staff to manage daily operations, student data, and reports.",
  },
  {
    id: 3,
    question: "How does TrakFuel help in fuel cost management?",
    answer:
      "TrakFuel provides real-time fuel tracking, preventing unauthorized usage and ensuring transparency in fuel consumption, saving organizations significant costs.",
  },
  {
    id: 4,
    question: "Is Absolute Study beneficial for student performance analysis?",
    answer:
      "Absolutely! Absolute Study provides deep insights into student performance, competitive analysis, and interactive learning opportunities for better academic growth.",
  },
  {
    id: 5,
    question: "How does Trak optimize logistics?",
    answer:
      "Trak offers an advanced tracking solution that ensures efficient delivery management, inventory control, and optimized resource utilization for supply chain operations.",
  },
];

const aboutData = {
  title: "Our Solutions",
  subtitle: "Efficient & Secure Business Management",
  description:
    "Our innovative solutions, including TrakMob, Eklavya, and TrakFuel, offer businesses a seamless way to optimize workforce tracking, education administration, and fuel management.",
  features: [
    "Track workforce performance in real time for better productivity.",
    "Automate school operations with a powerful ERP system.",
    "Monitor and control fuel consumption for cost savings.",
  ],
  images: [about_2_1, about_2_2, about_2_3],
  shapeImage: about_2_shape,
  titleShape: title_shape_2,
};

const TrakFuelPage = () => {
  return (
    <div>
      <MainHeading
        title="TrakFuel"
        subtitle="TrakFuel"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout aboutData={aboutData} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <KeyFeatures testimonials={testimonials} />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default TrakFuelPage;
