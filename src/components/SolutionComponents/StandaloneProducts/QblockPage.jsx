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
    text: "“Effortlessly retrieve and manage comprehensive farmers' data, including detailed land records, crop patterns, historical yield insights, and predictive analytics for improved agricultural decision-making and productivity enhancement.”",
    img: DocumentsStorageIcon,
    name: "Documents Storage",
    designation: "",
  },
  {
    text: "Systematically maintain an organized repository of farmers, capturing essential demographic information, landholding specifics, crop cultivation patterns, and historical agricultural data for streamlined management and informed decisions.",
    img: VersionControlIcon,
    name: "Version Control",
    designation: "",
  },
  {
    text: "Continuously track and analyze crop cycles, yields, and farming practices, enabling data-driven insights, sustainable agricultural methods, and enhanced productivity for long-term farm management and efficiency.",
    img: AccessControlIcon,
    name: "Access Control",
    designation: "",
  },
  {
    text: "Efficiently monitor and manage financial assistance, government subsidies, and loan disbursements for farmers, ensuring transparent tracking, timely disbursements, and optimized support for agricultural growth and sustainability.",
    img: DocumentsRetrievalIcon,
    name: "Documents Retrieval",
    designation: "",
  },
  {
    text: "Streamline procurement planning, optimize input supply distribution, and enhance logistics management for agricultural produce, ensuring timely availability, cost-efficiency, and effective supply chain coordination to boost farm productivity.",
    img: WorkflowAutomationIcon,
    name: "Workflow Automation",
    designation: "",
  },
  {
    text: "Ensure real-time monitoring of stock levels, track inventory, and efficiently manage storage facilities, optimizing resources, reducing wastage, improving efficiency, and ensuring timely access to agricultural supplies and produce.",
    img: CollaborationToolsIcon,
    name: "Collaboration Tools",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: AuditTrailsIcon,
    name: "Audit Trails",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: StorageQuotaManagementIcon,
    name: "Storage Quota Management",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: UserGuestDeactivationIcon,
    name: "User & Guest Deactivation",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: AutoBackupIcon,
    name: "Auto-Backup",
    designation: "",
  },
  {
    text: "Create comprehensive reports, engaging data visualizations, and trend analyses to provide actionable insights, empowering informed decision-making, optimizing farm operations, and driving sustainable agricultural practices.",
    img: RecycleBinIcon,
    name: "Recycle Bin",
    designation: "",
  },
];
const ExpertiseArray = {
  heading: "Qblock",
  para: "Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource andholistic. Holisticly restore real time resources whereas standardized networks.",
  keyPoints: [
    { name: "Centralized Document", per: "95%" },
    { name: "Quick & Easy Access", per: "99%" },
    { name: "Advanced Security & Access Control", per: "95%" },
    { name: "Automated Workflows", per: "95%" },
    { name: "Backup & Recovery", per: "92%" },
  ],
};
const TalkToAbout2Array = [
  {
    id: 1,
    question: "How does Qblock help in managing documents efficiently?",
    answer:
      "Qblock provides a centralized, secure platform for storing, organizing, and retrieving documents with advanced search and indexing features.",
  },
  {
    id: 2,
    question:
      "Is Qblock suitable for enterprises with strict security requirements?",
    answer:
      "Yes! Qblock offers role-based access control, encryption, audit trails, and automatic backups, ensuring enterprise-grade security and compliance.",
  },
  {
    id: 3,
    question: "Can multiple users collaborate on documents in real-time?",
    answer:
      "Absolutely! Qblock enables teams to share, edit, annotate, and track versions while maintaining a detailed change history.",
  },
  {
    id: 4,
    question: "Does Qblock support integration with other tools?",
    answer:
      "Yes! Qblock provides seamless integration with a variety of third-party applications, allowing you to automate workflows and enhance productivity.",
  },
];
const aboutData = {
  title: "QBLOCK",
  subtitle: "Smart & Secure Document Management System",
  description:
    "QBLOCK is an advanced DMS that streamlines document storage, retrieval, and collaboration with enterprise-grade security, seamless access, version tracking, and efficient workflows.",
  features: [
    "Securely store and organize multiple file formats for easy access.",
    "Track changes, access past versions, and maintain document history efficiently.",
    "Control permissions, secure access, and maintain document integrity.",
  ],
  images: [about_2_1, about_2_2, about_2_3],
  shapeImage: about_2_shape,
  titleShape: title_shape_2,
};
const QblockPage = () => {
  return (
    <div>
      <MainHeading
        title="QBLOCK"
        subtitle="QBLOCK"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout aboutData={aboutData} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <KeyFeatures testimonials={testimonials} />
      <TalkToAbout2 TalkToAbout2Array={TalkToAbout2Array} />
    </div>
  );
};

export default QblockPage;
