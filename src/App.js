import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Passion from "./components/Passion";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import SocialFooter from "./components/SocialFooter";
import DisplayWork from "./components/DisplayWork";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedWork, setSelectedWork] = useState(null);
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <SocialLinks />
      <Passion />
      <Skills />
      <Routes>
        <Route path="*">
          <Route
            index
            element={<Experience setSelectedWork={setSelectedWork} />}
          />
          <Route
            path=":id"
            element={<DisplayWork work={selectedWork} />}
          />
        </Route>
      </Routes>
      <Contact />
      <SocialFooter />
    </div>
  );
}

export default App;
