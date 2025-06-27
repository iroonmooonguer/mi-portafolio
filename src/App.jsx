import React from "react";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
  FaYoutube,
  FaFileAlt,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      {/* Foto de perfil */}
      <div className="avatar-container">
        <div className="avatar-wrapper">
          <div className="avatar-inner">
            <img
              src="/IMG_20230127_183601.jpg"
              alt="Foto de perfil"
              className="avatar"
            />
          </div>
        </div>
      </div>
      {/* Encabezado de saludo */}
      <h1>Hi, I'm Jonathan Pérez Pérez 👋</h1>
      {/* Descripción en inglés, bienvenida y presentación */}
      <p>
        Junior Fullstack Developer.<br />
        Welcome to my portfolio!<br /><br />
        I'm passionate about building creative web experiences and scalable solutions.<br />
        I love learning new technologies and collaborating on innovative projects.<br />
        Take a look at my work and feel free to connect!
      </p>
      <div className="links">
        <a
          href="https://github.com/iroonmooonguer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-perez-p%C3%A9rez-584761314/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:jonathanperezperez.1971@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a
          href="https://discord.gg/jonathan067727"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord /> Discord
        </a>
        <a
          href="https://youtube.com/@jhonathan_perez20?si=H_o5vnluS1wmttFw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube /> YouTube
        </a>
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt /> CV
        </a>
      </div>
    </div>
  );
}

export default App;
