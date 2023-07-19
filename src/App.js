import React from "react";
import "./Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import MoUs from "./components/MoUs";
import Footer from "./components/Footer";
import Exhibits from "./components/Exhibits";
import OurTeam from "./components/OurTeam";
import Overseas from "./components/Overseas";
import Doctorates from "./components/WallOfFame/Doctorates";
import GovtOfficials from "./components/WallOfFame/GovtOfficials";
import JoinUs from "./components/JoinUs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MoUs" element={<MoUs />}></Route>
          <Route path="/exhibits" element={<Exhibits />}></Route>
          <Route path="/ourTeam" element={<OurTeam/>}></Route>
          <Route path="/overseas" element={<Overseas/>}></Route>
          <Route path="/doctorates" element={<Doctorates/>}></Route>
          <Route path="/govtOfficials" element={<GovtOfficials/>}></Route>
          <Route path="/joinUs" element={<JoinUs/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
