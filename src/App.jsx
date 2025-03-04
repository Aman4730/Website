import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import QblockPage from "./components/SolutionComponents/StandaloneProducts/QblockPage";
import LogBooksPage from "./components/SolutionComponents/StandaloneProducts/LogBooksPage";
import AbsoluteStudyPage from "./components/SolutionComponents/StandaloneProducts/AbsoluteStudyPage";
import VisionDeskPage from "./components/SolutionComponents/StandaloneProducts/VisionDeskPage";
import SaiSoftwarePage from "./components/SolutionComponents/StandaloneProducts/SaiSoftwarePage";
import AksharPage from "./components/SolutionComponents/StandaloneProducts/AksharPage";
import SAGPage from "./components/SolutionComponents/StandaloneProducts/SAGPage";
import TrakFuelPage from "./components/SolutionComponents/StandaloneProducts/TrakFuelPage";
import IManagerPage from "./components/SolutionComponents/StandaloneProducts/IManagerPage";
import CropnetPage from "./components/SolutionComponents/StandaloneProducts/CropnetPage";
import ContactUs from "./components/ContactUs";
import AgricultureInformationSystemPage from "./components/SolutionComponents/DataScience/AgricultureInformationSystemPage";
import DecisionSupportSystemPage from "./components/SolutionComponents/DataScience/DecisionSupportSystemPage";
import FieldQuotationSystemPage from "./components/SolutionComponents/DataScience/FieldQuotationSystemPage";
import IssueManagementSystemPage from "./components/SolutionComponents/DataScience/IssueManagementSystemPage";
import DairyApplicationPage from "./components/SolutionComponents/InternetofThings/DairyApplicationPage";
import MilkAnalyserPage from "./components/SolutionComponents/InternetofThings/MilkAnalyserPage";
import PhotonPage from "./components/SolutionComponents/InternetofThings/PhotonPage";
import CommunicationApplicationPage from "./components/SolutionComponents/MobileApplications/CommunicationApplicationPage";
import IRediPage from "./components/SolutionComponents/MobileApplications/IRediPage";
import JKTourismPage from "./components/SolutionComponents/MobileApplications/JKTourismPage";
import KarGoPage from "./components/SolutionComponents/MobileApplications/KarGoPage";
import MonitorMPage from "./components/SolutionComponents/MobileApplications/MonitorMPage";
import SarojEducationPage from "./components/SolutionComponents/MobileApplications/SarojEducationPage";
import TourismApplicationPage from "./components/SolutionComponents/MobileApplications/TourismApplicationPage";
import MobileComponents from "./components/SolutionComponents/MobileApplications/MobileComponents";
import ApplicationDevelopment from "./components/ServicesComponents/ITServices/ApplicationDevelopment";
import ApplicationReengineering from "./components/ServicesComponents/ITServices/ApplicationReengineering";
import CloudMigration from "./components/ServicesComponents/ITServices/CloudMigration";
import EnterpriseApplication from "./components/ServicesComponents/ITServices/EnterpriseApplication";
import POCDevelopment from "./components/ServicesComponents/ITServices/POCDevelopment";
import ProductOrientedDelivery from "./components/ServicesComponents/ITServices/ProductOrientedDelivery";
import CentralCattleBreedingFarm from "./components/ServicesComponents/InfraServices/CentralCattleBreedingFarm";
import IndusTowersLimited from "./components/ServicesComponents/InfraServices/IndusTowersLimited";
import OrganicHealthProductsInitiative from "./components/ServicesComponents/InfraServices/OrganicHealthProductsInitiative";
import AcmeSolarCMSSystem from "./components/ServicesComponents/Accomplishments/AcmeSolarCMSSystem";
import JammuSmartCityProject from "./components/ServicesComponents/Accomplishments/JammuSmartCityProject";
import JammuTourism from "./components/ServicesComponents/Accomplishments/JammuTourism";
import MOVCDNER from "./components/ServicesComponents/Accomplishments/MOVCDNER";
import { useEffect } from "react";
import EklavyaPage from "./components/SolutionComponents/ERPSolutions/EklavyaPage";
import CarrerPage from "./Pages/CarrerPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./components/LoginPage";
import AdminPostPage from "./Pages/AdminPostPage";
import AdminDashboard from "./Pages/AdminDashboard";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        {/*Solution*/}
        {/*Standalone Products*/}
        <Route path="/solutions/qblock" element={<QblockPage />} />
        <Route path="/solutions/LogBooksPage" element={<LogBooksPage />} />
        <Route path="/solutions/edusaroj" element={<AbsoluteStudyPage />} />
        <Route path="/solutions/VisionDeskPage" element={<VisionDeskPage />} />
        <Route path="/solutions/LivestockManagement" element={<SAGPage />} />
        <Route path="/solutions/TrakFuelPage" element={<TrakFuelPage />} />
        <Route path="/solutions/IManagerPage" element={<IManagerPage />} />
        <Route path="/solutions/CropnetPage" element={<CropnetPage />} />
        <Route
          path="/solutions/StudentFinanceManagement"
          element={<AksharPage />}
        />
        <Route
          path="/solutions/CollegeFeeManagement"
          element={<SaiSoftwarePage />}
        />

        {/*Data Science*/}
        <Route
          path="/solutions/AgricultureInformationSystemPage"
          element={<AgricultureInformationSystemPage />}
        />
        <Route
          path="/solutions/DecisionSupportSystemPage"
          element={<DecisionSupportSystemPage />}
        />
        <Route
          path="/solutions/FieldQuotationSystemPage"
          element={<FieldQuotationSystemPage />}
        />
        <Route
          path="/solutions/IssueManagementSystemPage"
          element={<IssueManagementSystemPage />}
        />

        {/*Internet of Things (IoT)*/}
        <Route
          path="/solutions/MilkAnalyserPage"
          element={<MilkAnalyserPage />}
        />
        <Route path="/solutions/PhotonPage" element={<PhotonPage />} />
        <Route
          path="/solutions/DairyApplicationPage"
          element={<DairyApplicationPage />}
        />
        <Route path="/solutions/EklavyaPage" element={<EklavyaPage />} />
        {/*Mobile Applications*/}
        <Route path="/solutions/IRediPage" element={<IRediPage />} />
        <Route path="/solutions/JKTourismPage" element={<JKTourismPage />} />
        <Route path="/solutions/KarGoPage" element={<KarGoPage />} />
        <Route path="/solutions/MonitorMPage" element={<MonitorMPage />} />
        <Route
          path="/solutions/SarojEducationPage"
          element={<SarojEducationPage />}
        />
        <Route
          path="/solutions/TourismApplicationPage"
          element={<TourismApplicationPage />}
        />
        <Route
          path="/solutions/CommunicationApplicationPage"
          element={<CommunicationApplicationPage />}
        />
        <Route path="/MobileComponents" element={<MobileComponents />} />
        {/*Solution*/}

        {/*Services*/}
        {/*IT Services*/}
        <Route
          path="/services/ApplicationDevelopment"
          element={<ApplicationDevelopment />}
        />
        <Route
          path="/services/ApplicationReengineering"
          element={<ApplicationReengineering />}
        />
        <Route
          path="/services/EnterpriseApplication"
          element={<EnterpriseApplication />}
        />
        <Route
          path="/services/ProductOrientedDelivery"
          element={<ProductOrientedDelivery />}
        />
        <Route path="/services/CloudMigration" element={<CloudMigration />} />
        <Route path="/services/POCDevelopment" element={<POCDevelopment />} />
        {/*IT Services*/}

        {/*Infra Services*/}
        <Route
          path="/services/IndusTowersLimited"
          element={<IndusTowersLimited />}
        />
        <Route
          path="/services/CentralCattleBreedingFarm"
          element={<CentralCattleBreedingFarm />}
        />
        <Route
          path="/services/OrganicHealthProductsInitiative"
          element={<OrganicHealthProductsInitiative />}
        />
        {/*Infra Services*/}

        {/*Accomplishments*/}
        <Route
          path="/services/AcmeSolarCMSSystem"
          element={<AcmeSolarCMSSystem />}
        />
        <Route
          path="/services/JammuSmartCityProject"
          element={<JammuSmartCityProject />}
        />
        <Route path="/services/JammuTourism" element={<JammuTourism />} />
        <Route path="/services/MOVCDNER" element={<MOVCDNER />} />
        {/*Accomplishments*/}

        {/*Services*/}

        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/CarrerPage" element={<CarrerPage />} />

        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/adminlogin" element={<LoginPage />} />
        <Route path="/adminpost" element={<AdminPostPage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
