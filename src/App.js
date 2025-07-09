import React, { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

import './App.css';
import profilePic from './KALYAN.jpg';
import pdf from './KALYAN.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"></div>
        <div className="nav-links">
          {['home', 'about', 'projects','education', 'skills','experience', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
<button className={`toggle-glow-btn ${darkMode ? 'dark' : 'light'}`} onClick={() => setDarkMode(!darkMode)}>
  <span className="icon">{darkMode ? '☀️' : '🌙'}</span>
</button>


        </div>
      </nav>

      {/* Hero Section */}
      <Element name="home" className="section hero">
        <img src={profilePic} alt="Kalyan" className="profile-pic" />
        <div className="hero-text">
          <h1>
            Hello, I'm <span className="highlight">Kalyan</span>
          </h1>
          <p>Java | React | MySQL | Spring Boot | Cloud</p>
          <a href={pdf} download className="btn">Download Resume</a>
        </div>
      </Element>

      {/* About Section */}
      <Element name="about" className="section about">
        <div className="about-content">
          <h2>About Me</h2>
   <p>
A Computer Science student passionate about Software development Engineering, I build scalable, user-friendly applications using Java, React, Spring Boot, and MongoDB. Proficient in DSA, OOP, and system design, with hands-on internship experience.
I enjoy solving real-world problems with clean code and modern UI design. Always eager to learn, collaborate, and grow in innovative tech environments.  
</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kalyan-g-v-69615b281" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/kalyangvk03" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/kalyan___gv/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/KalyankumarGVK/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/9113868960" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a
        href="https://mail.google.com/mail/?view=cm&to=kalyangvk38@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
        </div>
        </div>
      </Element>

        {/* Projects Section */}
      <Element name="projects" className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>A Secure Data Sharing and Authorized Searchable Framework for e-Healthcare
System (Java, JSP, DriveHQ, SQL)
</h3>
            <p>- Designed a secure and efficient framework for encrypted Healthcare Records sharing.</p>
             <p>- A secure proxy searchable re-encryption scheme for encrypted PHR sharing in e-healthcare.</p>
              <p>- Ensured authorized access control and remote monitoring while maintaining patient privacy.
</p>
          </div>
          <div className="project-card">
            <h3>PG Management Website (ReactJs, NodeJS, MongoDB)</h3>
            <p>- Developed a PG Website with gallery, food menu, and PG environment exploration.</p>
            <p>- Implemented room booking & PG registration with secure authentication.</p>
          </div>
          <div className="project-card">
            <h3>Jungle Vistara a Zoo Management Website (ReactJs, TypeScript, NodeJS, MongoDB) </h3>
            <p>- Implemented multilingual support (English & Kannada) for a seamless user experience</p>
            <p>- Integrated key features like online ticket booking, animal adoption, and an interactive
gallery for visitors to explore.</p>
          </div>
        </div>
      </Element>

      {/* Skills Section */}
      <Element name="skills" className="section skills">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>React js</li>
          <li>Java + Spring Boot</li>
          <li>MongoDB / MySQL</li>
          <li>REST APIs</li>
          <li>Problem Solving</li>
          <li>OS and CN</li>
          <li>Cloud Deployment</li>
          <li>Git & GitHub</li>
          <li>Node js</li>
        </ul>
      </Element>
      {/* Education Section */}
<Element name="education" className="section education">
  <h2 className="education-title">Education</h2>
  <ul className="education-list">
    <li>
      <h3>🎓 AMC ENGINEERING COLLEGE, Bengaluru</h3>
      <p>B.E. Computer Science & Engineering (2021–2025) | <strong>7.5 CGPA</strong></p>
    </li>
    <li>
      <h3>🏫 Venkatadri IND PU College, Chintamani</h3>
      <p>12th Grade (2021) | <strong>74%</strong></p>
    </li>
    <li>
      <h3>🏫 Pathi Narayana High School, Munganahalli</h3>
      <p>10th Grade (2019) | <strong>70%</strong></p>
    </li>
  </ul>
</Element>

{/* Internship Experience Section */}
<Element name="internships" className="section internships">
  <h2>Experience</h2>
  <div className="internship-grid">
    <div className="internship-card">
      <h3>Varcons Technologies</h3>
      <p><strong>Role:</strong> Software Developer Intern</p>
      <p>Built responsive web apps using Java, Spring Boot & React.</p>
      <p>Involved in full stack tasks UI, Backend and API Intergration.</p>
    </div>
    <div className="internship-card">
      <h3>Tekkybench Innovations </h3>
      <p><strong>Role:</strong> Web Developer Intern</p>
      <p>Gained Hands-on Experience in HTML,CSS,Bootstrap and Wordpress</p>
      <p>Implemented user-Friendly interfaces adn interactive Features to Enhabce UI/UX</p>
    </div>
    <div className="internship-card">
      <h3>Dotch Endeavours</h3>
      <p><strong>Role:</strong> AI/ML Intern</p>
      <p>Gained hands-on experience in fundamental AI/ML concepts.</p>
      <p>Conducted data preprocessing, feature engineering, and model evaluation to improve
accuracy</p>
    </div>
  </div>
</Element>
   <Element name="contact" className="section contact">
  <h2 className="contact-title">Let's Connect</h2>
  <ul className="contact-list">
    <li><span>Email:</span> <a href="mailto:kalyangvk38@gmail.com">kalyangvk38@gmail.com</a></li>
    <li><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/kalyan-g-v-69615b281" target="_blank" rel="noopener noreferrer">linkedin.com/in/kalyan-g-v</a></li>
    <li><span>Call:</span> <a href="tel:+919113868960">+91 9113868960</a></li>
   <li><span>Whatsapp: </span> <a href="https://wa.me/9113868960">+91 9113868960</a></li>  
  </ul>
</Element>
<Element name="footer" className="section footer">
  <p className="footer-line">
    © 2025 — Made with ❤️ by <span className="footer-name">Kalyan</span>
  </p>
</Element>



    </>
  );
}

export default App;
