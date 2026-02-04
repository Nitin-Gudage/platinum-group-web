import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage"; // ✅ Make sure this exists

import { Route, Routes } from "react-router-dom";
import ServiceDetailsModal from "./components/ServiceDetailsModal";
import BookService from "./pages/BookService";
import bgimage from "./assets/cloudsbg.png";

function App() {
  return (
    <div className="App bg-white dark:bg-secondary min-h-screen flex flex-col">
      <NavBar />
      <main
        className="flex-grow bg-fixed bg-repeat bg-center bg-auto"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<BookService />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
