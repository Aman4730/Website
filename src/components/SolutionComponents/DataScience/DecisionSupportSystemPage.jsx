import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "../StandaloneProducts/SolutionReuseCom/KeyFeatures";
import about_13_1 from "../../../assets/img/normal/about_13_1.jpg";
import about_13_2 from "../../../assets/img/normal/about_13_2.jpg";
import about_13_3 from "../../../assets/img/normal/about_13_3.jpg";
import SolAbout4 from "../StandaloneProducts/SolutionReuseCom/SolutionAbout/SolAbout4";
import OurExpertise from "../StandaloneProducts/SolutionReuseCom/OurExpertises/OurExpertise";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import TalkToAbout1 from "../StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout1";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";
import WorkflowAutomationIcon from "../../../Imges/QblockIcon/WorkflowAutomationIcon.jpg";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    text: "“Admins manage users, track attendance, handle fees, and generate reports. The system ensures role-based access, monitors payments, and provides academic, financial, and operational insights for efficient college management.”",
    img: DocumentsStorageIcon,
    name: "Comprehensive Admin Panel",
    designation: "",
  },
  {
    text: "“Teachers can schedule classes, manage attendance in real-time, and submit grades. Students can track performance, ensuring transparency, proper planning, effective learning, and efficient course management.”",
    img: VersionControlIcon,
    name: "Teacher Dashboard",
    designation: "",
  },
  {
    text: "“Students and parents can pay fees online, view class schedules, and track academic performance. This ensures convenience, organization, transparency, efficiency, accessibility, accuracy, and continuous improvement in learning.”",
    img: AccessControlIcon,
    name: "Student & Parent Portal",
    designation: "",
  },
  {
    text: "“The system supports multiple languages, real-time data sync, and mobile accessibility, ensuring seamless communication, accessibility, and convenience for admins, teachers, students, and parents across various devices and platforms.”",
    img: DocumentsRetrievalIcon,
    name: "Secure and User-Friendly Interface",
    designation: "",
  },
  {
    text: "“The system uses MySQL/PostgreSQL for reliable data management and features a web-based architecture, ensuring scalability, accessibility, and seamless performance across modern browsers on any internet-enabled device.”",
    img: WorkflowAutomationIcon,
    name: "Robust Back-End Architecture",
    designation: "",
  },
];
const ExpertiseArray = {
  heading: "Sai Software",
  para: "Our platform enhances efficiency by streamlining operations, improving communication, and ensuring transparency for all stakeholders in the education ecosystem.",
  keyPoints: [
    { name: "Streamlined Operations", per: "95%" },
    { name: "Better Communication", per: "98%" },
    { name: "Efficient Fee Collection", per: "97%" },
    { name: "Enhanced Transparency", per: "96%" },
    { name: "Real-Time Data Sync", per: "99%" },
  ],
};
const TalkToAbout1Array = [
  {
    question: "How does the platform benefit schools and colleges?",
    answer:
      "Our platform streamlines operations, improves communication, and enhances transparency in managing attendance, fees, and academic records efficiently.",
  },
  {
    question: "Is the platform accessible on mobile devices?",
    answer:
      "Yes, the system is fully responsive and accessible on mobile devices, allowing students, parents, and teachers to stay connected anytime, anywhere.",
  },
  {
    question: "How secure is the fee payment system?",
    answer:
      "The platform integrates secure online payment options, ensuring safe transactions and reducing delays in fee collection.",
  },
  {
    question: "Can students and parents track academic performance?",
    answer:
      "Yes, students and parents can monitor grades, attendance, and fee payments in real-time, ensuring complete transparency and better academic planning.",
  },
];
const aboutData4 = [
  {
    id: 1,
    title: "Sai-Software",
    secTitle: "Software College Fee Management System",
    description:
      "Sai-Software brings a revolutionary solution to enhance college operations with a focus on streamlining fee management, improving communication, and simplifying the administrative tasks for all stakeholders.",
    checklist: [
      ["Security and Compliance", "Task Management"],
      ["Reporting and Analytics", "Team Collaboration"],
    ],
    contactLink: "contact.html",
    images: [about_13_1, about_13_2, about_13_3],
  },
];
const DecisionSupportSystemPage = () => {
  return (
    <div className="theme-blue3">
      <MainHeading
        title="Decision Support System"
        subtitle="Decision Support System"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
        marginBottom="70px"
      />
      <SolAbout4 aboutData={aboutData4} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout1 TalkToAbout1Array={TalkToAbout1Array} />
    </div>
  );
};

export default DecisionSupportSystemPage;
