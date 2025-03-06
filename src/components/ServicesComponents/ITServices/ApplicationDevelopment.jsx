import React from "react";
import MainHeading from "../../MainHeading";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceWhatWeDo from "../ServicesResueCom/ServiceWhatWeDo";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import service_6_1 from "../../../assets/img/icon/service_6_1.svg";
import service_6_2 from "../../../assets/img/icon/service_6_2.svg";
import service_6_3 from "../../../assets/img/icon/service_6_3.svg";
import service_6_4 from "../../../assets/img/icon/service_6_4.svg";
import service_featured_1 from "../../../assets/img/icon/service_featured_1.svg";
import service_featured_2 from "../../../assets/img/icon/service_featured_2.svg";
import service_featured_3 from "../../../assets/img/icon/service_featured_3.svg";
import service_featured_4 from "../../../assets/img/icon/service_featured_4.svg";
import OurApplicationDevelopment from "../ServicesResueCom/OurApplicationDevelopment";
import OurDevelopmentMethodology from "../ServicesResueCom/OurDevelopmentMethodology";
import node from "../../../Imges/language/node.png";
import react from "../../../Imges/language/react.png";
import Angular from "../../../Imges/language/Angular.png";
import android1 from "../../../Imges/language/android1.png";
import php3 from "../../../Imges/language/php3.png";
import Flutter from "../../../Imges/language/Flutter.png";
import Python from "../../../Imges/language/Python.png";
import java from "../../../Imges/language/java.png";
import process_box_3_1 from "../../../assets/img/icon/process_box_3_1.svg";
import process_box_3_2 from "../../../assets/img/icon/process_box_3_2.svg";
import process_box_3_3 from "../../../assets/img/icon/process_box_3_3.svg";
const ApplicationDevelopment = () => {
  const aboutFeatures = {
    title: "Application Development",
    heading: "What you can get with custom application development",
    aboutus:
      "With decades of experience in software development across various industries, we provide specialized technology expertise. Our solutions integrate seamlessly with existing systems, ensuring long-term efficiency. Harnessing the power of Telecommunication & Computer Networking, Banking Software, AgriTech, EduTech, Smart Cities Solutions, AI, data analytics, machine learning, cybersecurity, and cloud consulting, we deliver future-proof solutions tailored to your needs.",
    asd: [
      {
        title: "Free Consultation",
        text: "IT agencies usually offer free consultations to understand a potential.",
      },
      {
        title: "Active Team",
        text: "This term typically applies to membership programs where pay",
      },
    ],
  };
  const services = [
    {
      img: service_featured_1,
      title: "Scalable Solutions",
      description:
        "Build applications that grow with your business, ensuring long-term success, adaptability, efficiency, and seamless performance.",
      link: "service-details.html",
    },
    {
      img: service_featured_2,
      title: "Robust Security",
      description:
        "Protect your data with enterprise-grade security measures, encryption, compliance, risk management, and advanced threat detection systems.",
      link: "service-details.html",
    },
    {
      img: service_featured_3,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with cloud platforms for maximum flexibility, scalability, efficiency, collaboration, automation, and optimized resource allocation.",
      link: "service-details.html",
    },
    {
      img: service_featured_4,
      title: "Data-Driven Insights",
      description:
        "Leverage analytics to make informed business decisions, enhance productivity, optimize growth, maximize revenue, and improve operational efficiency.",
      link: "service-details.html",
    },
  ];
  // const applicationservices = [
  //   {
  //     id: 1,
  //     icon: service_6_1,
  //     title: "Validate your vision",
  //     description:
  //       "Kick-start application development with Logimetrix product design workshops, to shape concepts and test theories that help transform your ideas into data-led product design. We can also put your vision through its paces with PoC development, so you’ll only pursue ideas that have real business value.",
  //   },
  //   {
  //     id: 2,
  //     icon: service_6_2,
  //     title: "Innovate and compete",
  //     description:
  //       "Our dedicated R&D team designs strategic solutions to fit even the most complex custom software development projects. We’re industry leaders when it comes to harnessing innovative technologies to develop products for rapidly evolving markets.",
  //   },
  //   {
  //     id: 3,
  //     icon: service_6_3,
  //     title: "Maximise your efficiency",
  //     description:
  //       "We’ll help you automate your processes so you can release resources to focus on delivering better service. Once we’ve scoped your application development requirements, we’ll take full responsibility for the delivery team and project implementation – allowing you to concentrate on your core business.",
  //   },
  //   {
  //     id: 4,
  //     icon: service_6_4,
  //     title: "Speed up delivery",
  //     description:
  //       "Our agile team helps you meet challenging deadlines more cost-effectively, compared with in-house development. We have decades of experience and a tried-and-tested delivery framework that guarantees consistency and minimises bottlenecks.",
  //   },
  //   {
  //     id: 5,
  //     icon: service_6_1,
  //     title: "Future-proof your web applications",
  //     description:
  //       "We’ll set up a continuous integration/delivery process, so you’ll be able to check and deliver code changes frequently and seamlessly, across multiple platforms. Progress reporting helps you spot kinks in your software ecosystem, so you can make changes that enable you to deliver the best possible service.",
  //   },
  //   {
  //     id: 6,
  //     icon: service_6_2,
  //     title: "Ensure operational resilience & agility",
  //     description:
  //       "Using cloud, intelligent automation and AI development services, we’ll help you create digital ecosystems that are operationally resilient so you can quickly adapt your business models and processes to fit the market and, thus, grow your business. Through rigorous business analysis, our development team will design a tailored, cost-effective technology solution that supports your business needs and continuity plan.",
  //   },
  // ];
  const applicationservices = [
    {
      id: 1,
      icon: service_6_1,
      title: "Cross-Platform Development",
      description:
        "Leverage our expertise in React Native and Flutter to create seamless, high-performance applications for both iOS and Android platforms effortlessly with optimal performance.",
    },
    {
      id: 2,
      icon: service_6_2,
      title: "Web Application Development",
      description:
        "Build fast, scalable, and responsive web applications with modern frameworks like React.js, Angular, and Vue.js to enhance user engagement and business growth.",
    },
    {
      id: 3,
      icon: service_6_3,
      title: "Cloud-Based Solutions",
      description:
        "Develop and deploy scalable, secure cloud applications on AWS, Azure, and Google Cloud with seamless third-party service integrations for better efficiency and flexibility.",
    },
    {
      id: 4,
      icon: service_6_4,
      title: "Secure Application Development",
      description:
        "Implement robust security features, including authentication, data encryption, threat detection, and compliance with industry security standards to ensure data protection.",
    },
    {
      id: 5,
      icon: service_6_1,
      title: "Enterprise Software Solutions",
      description:
        "Design and develop custom, feature-rich enterprise applications to streamline business processes, enhance productivity, and drive digital transformation for organizations worldwide.",
    },
    {
      id: 6,
      icon: service_6_2,
      title: "AI & ML Integration",
      description:
        "Enhance your applications with AI-driven insights, automation, and predictive analytics using cutting-edge deep learning and machine learning algorithms for smarter decision-making.",
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
    {
      name: "PHP",
      img: php3,
      desc: "Server-side, dynamic, scripting, MySQL, WordPress, Laravel, secure, flexible, backend, open-source.",
    },
    {
      name: "Flutter",
      img: Flutter,
      desc: "Cross-platform, UI-kit, Dart, widgets, fast, native-like, mobile, web, performance, beautiful.",
    },
    {
      name: "Python",
      img: Python,
      desc: "Versatile, AI, data-science, Django, Flask, scripting, automation, machine-learning, backend, readable.",
    },
    {
      name: "Java",
      img: java,
      desc: "OOP, secure, cross-platform, JVM, backend, Android, enterprise, Spring, scalable, robust.",
    },
  ];
  const processData = {
    title: "Our Development Methodology",
    subtitle: "Structured Approach for Success",
    description:
      "We follow a systematic and efficient methodology to ensure seamless project execution and high-quality results.",
    buttonText: "Get Started Now",
    buttonLink: "/contactUs",
    steps: [
      {
        id: 1,
        img: process_box_3_1,
        title: "Discovery & Planning",
        desc: "Requirement analysis, project scoping, strategic planning, and ensuring application quality through rigorous testing and debugging.",
        link: "service-details.html",
      },
      {
        id: 2,
        img: process_box_3_2,
        title: "UI/UX Design & Development",
        desc: "Crafting intuitive and visually appealing designs while implementing robust and scalable solutions using modern frameworks.",
        link: "service-details.html",
      },
      {
        id: 3,
        img: process_box_3_3,
        title: "Deployment & Synchronization",
        desc: "Ensuring seamless integration, cloud synchronization, and security for optimal performance and scalability.",
        link: "service-details.html",
      },
    ],
  };

  return (
    <div>
      <MainHeading
        title="Application Development"
        subtitle="Application Development"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo services={services} />
      <OurApplicationDevelopment applicationservices={applicationservices} />
      <ServiceLanguage languages={languages} />
      <OurDevelopmentMethodology processData={processData} />
    </div>
  );
};

export default ApplicationDevelopment;
