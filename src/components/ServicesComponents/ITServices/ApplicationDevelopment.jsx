import React from "react";
import MainHeading from "../../MainHeading";
import ServiceAboutUs from "../ServicesResueCom/ServiceAboutUs";
import ServiceWhatWeDo from "../ServicesResueCom/ServiceWhatWeDo";
import ServiceLanguage from "../ServicesResueCom/ServiceLanguage";
import service_6_1 from "../../../assets/img/icon/service_6_1.svg";
import service_6_2 from "../../../assets/img/icon/service_6_2.svg";
import service_6_3 from "../../../assets/img/icon/service_6_3.svg";
import service_6_4 from "../../../assets/img/icon/service_6_4.svg";
import Ourworkthatinspired from "../ServicesResueCom/Ourworkthatinspired";
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

const ApplicationDevelopment = () => {
  const aboutFeatures = {
    title: "About our company",
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
      title: "Desktop Apps",
      description:
        "We build desktop apps for Windows, macOS, and Linux with seamless integration. Get full-cycle development tailored to your needs.",
      link: "service-details.html",
    },
    {
      img: service_featured_2,
      title: "Web Apps",
      description:
        "From UX design to backend development, we create high-performance web apps for eCommerce, logistics, and more.",
      link: "service-details.html",
    },
    {
      img: service_featured_3,
      title: "Mobile Apps",
      description:
        "We develop native and cross-platform mobile apps for iOS and Android, ensuring smooth performance and security.",
      link: "service-details.html",
    },
    {
      img: service_featured_4,
      title: "Data & BI",
      description:
        "We deliver data warehouse and BI solutions to enhance operations, drive revenue, and provide actionable insights.",
      link: "service-details.html",
    },
  ];
  const applicationservices = [
    {
      id: 1,
      icon: service_6_1,
      title: "Validate your vision",
      description:
        "Kick-start application development with Logimetrix product design workshops, to shape concepts and test theories that help transform your ideas into data-led product design. We can also put your vision through its paces with PoC development, so you’ll only pursue ideas that have real business value.",
    },
    {
      id: 2,
      icon: service_6_2,
      title: "Innovate and compete",
      description:
        "Our dedicated R&D team designs strategic solutions to fit even the most complex custom software development projects. We’re industry leaders when it comes to harnessing innovative technologies to develop products for rapidly evolving markets.",
    },
    {
      id: 3,
      icon: service_6_3,
      title: "Maximise your efficiency",
      description:
        "We’ll help you automate your processes so you can release resources to focus on delivering better service. Once we’ve scoped your application development requirements, we’ll take full responsibility for the delivery team and project implementation – allowing you to concentrate on your core business.",
    },
    {
      id: 4,
      icon: service_6_4,
      title: "Speed up delivery",
      description:
        "Our agile team helps you meet challenging deadlines more cost-effectively, compared with in-house development. We have decades of experience and a tried-and-tested delivery framework that guarantees consistency and minimises bottlenecks.",
    },
    {
      id: 5,
      icon: service_6_1,
      title: "Future-proof your web applications",
      description:
        "We’ll set up a continuous integration/delivery process, so you’ll be able to check and deliver code changes frequently and seamlessly, across multiple platforms. Progress reporting helps you spot kinks in your software ecosystem, so you can make changes that enable you to deliver the best possible service.",
    },
    {
      id: 6,
      icon: service_6_2,
      title: "Ensure operational resilience & agility",
      description:
        "Using cloud, intelligent automation and AI development services, we’ll help you create digital ecosystems that are operationally resilient so you can quickly adapt your business models and processes to fit the market and, thus, grow your business. Through rigorous business analysis, our development team will design a tailored, cost-effective technology solution that supports your business needs and continuity plan.",
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
  return (
    <div>
      <MainHeading
        title="Application Development"
        subtitle="Application Development"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Solution" }]}
      />
      <ServiceAboutUs aboutFeatures={aboutFeatures} />
      <ServiceWhatWeDo services={services} />
      <Ourworkthatinspired />
      <OurApplicationDevelopment applicationservices={applicationservices} />
      <ServiceLanguage languages={languages} />
      <OurDevelopmentMethodology />
    </div>
  );
};

export default ApplicationDevelopment;
