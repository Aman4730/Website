import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import NavBar from "./components/NavBar";
import PreLoader from "./PreLoader";
import Footer from "./components/Footer";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
