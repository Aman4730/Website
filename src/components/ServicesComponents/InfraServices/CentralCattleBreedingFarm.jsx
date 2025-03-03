import React from "react";
import ServiceAbout2 from "../ServicesResueCom/ServiceAbout2";
import ServiceAbout3 from "../ServicesResueCom/ServiceAbout3";
import MainHeading from "../../MainHeading";
import Services from "../../Services";
import FarmRenovation from "../ServicesResueCom/FarmRenovation";
import ServiceWhatWeDo2 from "../ServicesResueCom/ServiceWhatWeDo2";
import service_7_1 from "../../../assets/img/icon/service_7_1.svg";
import service_7_2 from "../../../assets/img/icon/service_7_2.svg";
import service_7_3 from "../../../assets/img/icon/service_7_3.svg";
import featureimg121 from "../../../assets/img/normal/feature-img-12-1.png";
import featureimg122 from "../../../assets/img/normal/feature-img-12-2.png";
import service_card_1 from "../../../assets/img/icon/service_card_1.svg";
import service_card_2 from "../../../assets/img/icon/service_card_2.svg";
import service_card_3 from "../../../assets/img/icon/service_card_3.svg";
import service_card_4 from "../../../assets/img/icon/service_card_4.svg";
import project_2_1 from "../../../assets/img/project/project_2_1.jpg";
import project_2_2 from "../../../assets/img/project/project_2_2.jpg";
import project_2_3 from "../../../assets/img/project/project_2_3.jpg";
import infra from "../../../Imges/infra.jpg";
import infra1 from "../../../Imges/infra1.jpg";
import infra2 from "../../../Imges/infra2.jpg";
import infra_why from "../../../Imges/infra_why.jpg";
const CentralCattleBreedingFarm = () => {
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
  const features = [
    {
      id: 1,
      title: "Central Cattle Breeding Farm Renovation",
      description:
        "The Central Cattle Breeding Farm (CCBF) site is undergoing extensive construction and renovation activities to enhance its functionality and infrastructure. Key work areas include old cow shades, loafing areas, a quarantine center, administrative buildings, and other auxiliary structures.",
      image1: featureimg121,
      image2: featureimg122,
      link: "about.html",
    },
  ];
  const services1 = [
    {
      img: service_card_1,
      title: "Cattle Shelter & Care",
      description:
        "Modern shelters with ventilation, temperature control, and injury-free flooring.",
    },
    {
      img: service_card_2,
      title: "Feeding & Nutrition",
      description:
        "Automated feeding systems for precise nutrition, reduced wastage, improved efficiency, and convenience.",
    },
    {
      img: service_card_3,
      title: "Water Management",
      description:
        "Robust water supply, drainage, and rainwater harvesting systems for sustainability and efficiency.",
    },
    {
      img: service_card_4,
      title: "Waste Disposal",
      description:
        "Efficient manure management converted into organic fertilizers for sustainability. ",
    },
  ];
  const projects = [
    {
      img: infra,
      title: "Modern Cattle Shelters",
      desc: "Designed for maximum airflow and spacious layouts, ensuring a healthier and stress-free environment for cattle.",
    },
    {
      img: infra1,
      title: "Eco-Friendly Infrastructure",
      desc: "Built with sustainable materials to minimize environmental impact while maximizing durability and efficiency.",
    },
    {
      img: infra2,
      title: "Advanced Facilities",
      desc: "Integrated with smart automation to enhance precision, reduce manual work, and boost overall productivity.",
    },
  ];
  const about3 = [
    {
      title: "Why This Renovation Matters?",
      description:
        "The Central Cattle Breeding Farm is a cornerstone of the dairy industry, and its modernization ensures:",
      buttonText: "View Details",
      buttonLink: "about.html",
      images: [infra_why],
    },
  ];
  const about3features = [
    "Sustainable farming practices",
    " Improved cattle health and productivity",
    "Eco-friendly waste management",
    "Energy-efficient operations",
  ];
  return (
    <div>
      <MainHeading
        title="Central Cattle Breeding Farm"
        subtitle="Central Cattle Breeding Farm"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAbout2 features={features} />
      <Services services={services1} />
      <FarmRenovation projects={projects} />
      <ServiceAbout3 data={about3} about3features={about3features} />
    </div>
  );
};

export default CentralCattleBreedingFarm;
