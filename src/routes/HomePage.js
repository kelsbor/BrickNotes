import logo from '../images/logo.png'
import pianoimg from '../images/piano.png'
import notes from '../images/circleofnotes.png'
import sheet from '../images/sheet.png'
import '../styles/homepage.css';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation occurs only once
    });
  }, []);

  return (
    <>
      <header className="p-3 bg-dark text-white">
        <nav className="navbar navbar-expand-sm bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" style={{ width: '60px', height: '60px' }} />
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
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
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

      {/* Main Banner */}
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '150px', height: '150px' }}
          data-aos="fade-down"
        />
        <div className="fw-bold text-center flex-column d-flex m-5" data-aos="fade-up">
          <p className="display-4 fw-bold highlight bg-dark text-white" >BrickNotes</p>
          <p className="highlight bg-dark text-white">Build your sound!</p>
        </div>
        <a href="/app">
          <button className="btn btn-dark m-4" style={{ borderRadius: '20px'}}>Get Started!</button>
        </a>
      </div>

      {/* Feature Sections */}
      <section className="feature-section bg-light p-5" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Generate Chords & Scales</h1>
          <p className="fs-5 mt-3">
            Easily build and visualize complex chord and scale combinations with
            ease and precision.
          </p>
          <img
            src={sheet}
            alt="Sheet Music"
            style={{margin: '80px'}}
          />
        </div>
      </section>

      <section className="feature-section bg-dark text-white p-5" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Explore Negative Harmony</h1>
          <p className="fs-5 mt-3">
            Discover the beauty of negative harmony by mirroring chords and
            scales around a customizable axis.
          </p>
          <img
            src={notes}
            alt="Negative Harmony"
            style={{ width: '300px', height: '300px', borderRadius: '50%', margin: '80px' }}
            />
        </div>
      </section>

      <section className="feature-section bg-light p-5" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Interactive Piano</h1>
          <p className="fs-5 mt-3">
            Experiment with a responsive, customizable piano that brings your
            musical ideas to life.
          </p>
          <img
            src={pianoimg}
            alt="Piano"
            style={{ margin: '80px' }}
          />
        </div>
      </section>

      <section className="feature-section bg-dark text-white p-5" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Audio Playback</h1>
          <p className="fs-5 mt-3">
            Listen to your creations with integrated audio playback, including
            chords and arpeggios.
          </p>
          <h1>
            <i className="bi bi-volume-up-fill" style={{ fontSize: '8rem', margin: '80px' }}></i>
          </h1>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-3 bg-dark text-white">
        <p className="text-center">© 2023 BrickNotes. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;