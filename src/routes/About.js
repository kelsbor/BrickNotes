import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../images/logo.png";

AOS.init();

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="p-3 bg-dark text-white text-left">
        <nav className="navbar navbar-expand-sm bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <a className="navbar-brand" href="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "60px", height: "60px" }}
                />
              </a>
              <h1 className="navbar-text text-white">BrickNotes</h1>
            </ul>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list text-white fs-3"></i>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto fs-5 fw-bold justify-content-end gap-3">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/app">
                    APP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/about">
                    ABOUT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "150px" }} />
        <div className="fw-bold text-center flex-column d-flex m-5">
          <p className="display-4 fw-bold highlight bg-dark text-white">About BrickNotes</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="display-5" data-aos="fade-up">
              A Web Development Journey
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              This project was created as part of a Web Development class as a way of learning new web technologies.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <h2>Technologies Used</h2>
            <ul className="list-group">
              <li className="list-group-item">React</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">AOS (Animate on Scroll)</li>
              <li className="list-group-item">Custom SVG Handling</li>
              <li className="list-group-item">Dynamic Audio Playback</li>
            </ul>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2>About the Project</h2>
            <p>
              BrickNotes allows users to dynamically create piano components,
              generate chords, experiment with scales, and dive into the unique
              realm of negative harmony.
            </p>
            <p>
              This project exemplifies the power of modern web technologies,
              combining visual appeal and interactivity.
            </p>
          </div>
        </div>
      </div>

      <footer className="p-3 bg-dark text-white">
        <p className="text-center">© 2023 BrickNotes. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutPage;