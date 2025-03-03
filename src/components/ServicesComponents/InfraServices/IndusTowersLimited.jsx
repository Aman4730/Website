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
import infra_why from "../../../Imges/infra_why.jpg";
import TalkToAbout from "../../SolutionComponents/StandaloneProducts/SolutionReuseCom/TalkToAboutAnyQuestion/TalkToAbout";
const IndusTowersLimited = () => {
  const services = [
    {
      img: service_7_1,
      title: "500+ Towers Constructed",
      desc: "Successfully built and deployed over 500 telecom towers, ensuring seamless connectivity and network expansion.",
      link: "service-details.html",
    },
    {
      img: service_7_2,
      title: "7+ Regions Covered",
      desc: "Our infrastructure spans across 7+ regions, supporting telecom operations with robust and reliable solutions.",
      link: "service-details.html",
    },
    {
      img: service_7_3,
      title: "24/7 Cab Availability",
      desc: "Round-the-clock cab services to ensure smooth site operations and workforce mobility at all project locations.",
      link: "service-details.html",
    },
    {
      img: service_7_1,
      title: "150+ Skilled Technicians",
      desc: "A dedicated team of over 150 experienced technicians, ensuring high-quality execution and maintenance of telecom sites.",
      link: "service-details.html",
    },
  ];
  const features = [
    {
      id: 1,
      title: "Telecom Infrastructure Excellence",
      description:
        "Since 2017, we have been proudly associated with Indus Towers Limited, formerly known as Bharti Infratel Limited. This project is a key part of our business and focuses on strengthening telecom infrastructure across various locations. It encompasses two major departments: New Build Sites (NBS) and Upgrade, ensuring the seamless expansion and enhancement of telecom networks, and SitesCab Services, which streamline site management and operational efficiency. Our commitment to excellence drives us to deliver cutting-edge solutions that support the evolving needs of the telecom industry.",
      image1: featureimg121,
      image2: featureimg122,
      link: "about.html",
    },
  ];
  const projects = [
    {
      img: project_2_1,
      title: "Modern Cattle Shelters",
      desc: "Designed for maximum airflow and spacious layouts, ensuring a healthier and stress-free environment for cattle.",
    },
    {
      img: project_2_2,
      title: "Eco-Friendly Infrastructure",
      desc: "Built with sustainable materials to minimize environmental impact while maximizing durability and efficiency.",
    },
    {
      img: project_2_3,
      title: "Advanced Facilities",
      desc: "Integrated with smart automation to enhance precision, reduce manual work, and boost overall productivity.",
    },
  ];
  return (
    <div>
      <MainHeading
        title="Indus Towers Limited"
        subtitle="Indus Towers Limited"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAbout2 features={features} />
      <ServiceWhatWeDo2
        services={services}
        sectionTitle="Our Achievements in Telecom Infrastructure"
      />
      <FarmRenovation projects={projects} />
      <TalkToAbout />
    </div>
  );
};

export default IndusTowersLimited;
