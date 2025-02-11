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
function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/solutions/qblock" element={<QblockPage />} />
        <Route path="/solutions/LogBooksPage" element={<LogBooksPage />} />
        <Route path="/solutions/edusaroj" element={<AbsoluteStudyPage />} />
        <Route path="/solutions/VisionDeskPage" element={<VisionDeskPage />} />
        <Route
          path="/solutions/SaiSoftwarePage"
          element={<SaiSoftwarePage />}
        />
        <Route path="/solutions/AksharPage" element={<AksharPage />} />
        <Route path="/solutions/SAGPage" element={<SAGPage />} />
        <Route path="/solutions/TrakFuelPage" element={<TrakFuelPage />} />
        <Route path="/solutions/IManagerPage" element={<IManagerPage />} />
        <Route path="/solutions/CropnetPage" element={<CropnetPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
