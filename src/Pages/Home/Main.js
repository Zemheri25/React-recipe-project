import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "../../components/Details";
import { useState } from "react";

import "./Main.css";
import Home from "../Home1/Home";
import About from "../About/About";
import NotFound from "../../components/NotFound";
import { GiHamburgerMenu } from "react-icons/gi";

function Main({ removeUser }) {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/home" className="logbutton h1" onClick={() =>setOpen(false)}>
          Zemheri Recipe
        </Link>
        {open && (
          <div className="div2">
            <Link to="/about" className="logbutton" onClick={() => setOpen(false)}>
              About
            </Link>
            <a
              href="https://github.com/Zemheri25 "
              className="logbutton"
              target={"_blank"}
            >
              GITHUB
            </a>

            <button className="logbutton button" onClick={() => removeUser()}>
              Log Out
            </button>
          </div>
        )}
        <GiHamburgerMenu className="hamburger" onClick={() => setOpen(!open)} />
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;
