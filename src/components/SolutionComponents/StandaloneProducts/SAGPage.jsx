import React from "react";
import MainHeading from "../../MainHeading";
import KeyFeatures from "./SolutionReuseCom/KeyFeatures";
import SolAbout1 from "./SolutionReuseCom/SolutionAbout/SolAbout1";
import about_11_1 from "../../../assets/img/normal/about_11_1.jpg";
import about_11_2 from "../../../assets/img/normal/about_11_2.jpg";
import about_11_3 from "../../../assets/img/normal/about_11_3.jpg";
import OurExpertise from "./SolutionReuseCom/OurExpertises/OurExpertise";
import title_shape_2 from "../../../assets/img/theme-img/title_shape_2.svg";
import AccessControlIcon from "../../../Imges/QblockIcon/AccessControlIcon.jpg";
import VersionControlIcon from "../../../Imges/QblockIcon/VersionControlIcon.jpg";
import TalkToAbout3 from "./SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout3";
import DocumentsStorageIcon from "../../../Imges/QblockIcon/DocumentsStorageIcon.jpg";
import DocumentsRetrievalIcon from "../../../Imges/QblockIcon/DocumentsRetrievalIcon.jpg";

const ExpertiseArray = {
  heading: "Qblock",
  para: "Tracks AI procedures on animals, records detailed breeding history and success rates, and generates AI performance reports based on date, breed, and village for effective monitoring and analysis.",
  keyPoints: [
    { name: "Maintains Breed-Specific Data", per: "95%" },
    { name: "Monitors Breeding Success Rates", per: "99%" },
    { name: "Generates AI Performance Reports", per: "95%" },
    { name: "Tracks Farmer Participation", per: "95%" },
    { name: "Organizes Data by Village", per: "92%" },
  ],
};
const testimonials = [
  {
    text: "“Tracks AI procedures on animals, records detailed breeding history and success rates, and generates AI performance reports based on date, breed, and village for effective monitoring, analysis, and improvement.”",
    img: DocumentsStorageIcon,
    name: "AI (Artificial Insemination) Management",
    designation: "",
  },
  {
    text: "“Maintains detailed farmer profiles, tracks farmers actively participating in AI programs, and monitors services provided to each farmer for better management, record-keeping, and service optimization efficiency.”",
    img: VersionControlIcon,
    name: "Farmer Management",
    designation: "",
  },
  {
    text: "“Organizes data by village for easy monitoring, analyzes AI program effectiveness across different regions, and tracks farmer participation and engagement to enhance decision-making, improve services, and optimize program outcomes.”",
    img: AccessControlIcon,
    name: "Village-Wise Tracking",
    designation: "",
  },
  {
    text: "“Maintains breed-specific data for various livestock species, monitors breeding success rates over time, and generates comprehensive reports for detailed breeding efficiency analysis and improved livestock management.”",
    img: DocumentsRetrievalIcon,
    name: "Breeding Records Management",
    designation: "",
  },
];
const TalkToAbout3Array = [
  {
    id: 1,
    question: "How does SAG improve Artificial Insemination (AI) management?",
    answer:
      "SAG tracks AI procedures, records breeding history, monitors success rates, and generates detailed performance reports by date, breed, and village.",
  },
  {
    id: 2,
    question: "How does the system help farmers in managing their livestock?",
    answer:
      "SAG maintains detailed farmer profiles, tracks AI program participation, and provides real-time insights to improve breeding efficiency.",
  },
  {
    id: 3,
    question: "Can SAG track AI success rates and generate reports?",
    answer:
      "Yes, the system monitors breeding success rates, keeps detailed records, and provides analytics to help optimize breeding programs.",
  },
  {
    id: 4,
    question:
      "How does village-wise tracking benefit agricultural organizations?",
    answer:
      "SAG organizes AI data by village, enabling better monitoring of AI program effectiveness, farmer engagement, and regional breeding trends.",
  },
];
const aboutData1 = {
  title: "SAG",
  subtitle: "We Deliver Consumer-centric Tech Solutions.",
  description:
    "We are proud to have successfully developed and deployed the SAG (System for Agricultural Growth), an AI-powered livestock management system designed to revolutionize Artificial Insemination (AI) tracking, farmer management, and breeding records. This platform enables accurate data collection, real-time monitoring, and strategic decision-making to enhance agricultural productivity.",
  features: [
    "SAG – AI-powered system for livestock management and breeding records.",
    "Tracks Artificial Insemination, farmer data, and breeding success.",
    "Enhances agricultural productivity with real-time data and AI insights.",
  ],
  images: [about_11_1, about_11_2, about_11_3],
  titleShape: title_shape_2,
  experienceYears: 12,
  experienceText: "Years of experience in startup building",
  videoLink: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
};
const SAGPage = () => {
  return (
    <div>
      <MainHeading
        title="SAG"
        subtitle="SAG"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <SolAbout1 aboutData={aboutData1} />
      <KeyFeatures testimonials={testimonials} />
      <OurExpertise ExpertiseArray={ExpertiseArray} />
      <TalkToAbout3 TalkToAbout3Array={TalkToAbout3Array} />
    </div>
  );
};

export default SAGPage;
