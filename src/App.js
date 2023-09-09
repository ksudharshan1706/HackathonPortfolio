import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componants/Navbar/Navbar.1";
import AboutMe from "./componants/aboutMe/AboutMe";
import Skills from "./componants/skills/Skills";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./componants/projects/MyProjects";
import Contact from "./componants/contact/Contacts.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/About me" element={<AboutMe />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<MyProjects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
