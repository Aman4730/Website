import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import NavBar from "./components/NavBar";
import PreLoader from "./PreLoader";
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
function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        {/*Standalone Products*/}
        <Route path="/solutions/qblock" element={<QblockPage />} />
        <Route path="/solutions/LogBooksPage" element={<LogBooksPage />} />
        <Route path="/solutions/edusaroj" element={<AbsoluteStudyPage />} />
        <Route path="/solutions/VisionDeskPage" element={<VisionDeskPage />} />
        <Route path="/solutions/AksharPage" element={<AksharPage />} />
        <Route path="/solutions/SAGPage" element={<SAGPage />} />
        <Route path="/solutions/TrakFuelPage" element={<TrakFuelPage />} />
        <Route path="/solutions/IManagerPage" element={<IManagerPage />} />
        <Route path="/solutions/CropnetPage" element={<CropnetPage />} />
        <Route
          path="/solutions/SaiSoftwarePage"
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
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
