import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import mifoto from "../assets/mifoto.jpg";
import SeriesTMDB from "../components/SeriesTMDB";
import Favoritas from "../components/Favoritas";

const Header: React.FC = () => (
  <header className="text-center py-8 sm:py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2">Pedro Castillo</h1>
    <p className="text-sm sm:text-lg opacity-90">
      Locución, diseño gráfico y programación
    </p>
    <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-4 px-3">
      <a
        href="#sobre-mi"
        className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs sm:text-base transition"
      >
        Sobre mí
      </a>
      <a
        href="#experiencia"
        className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs sm:text-base transition"
      >
        Experiencia
      </a>
      <a
        href="#entretenimiento"
        className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs sm:text-base transition"
      >
        Entretenimiento
      </a>
      <a
        href="#contacto"
        className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs sm:text-base transition"
      >
        Contacto
      </a>
    </div>
  </header>
);


const SectionContainer: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => (
  <section
    id={id}
    className="max-w-3xl mx-auto mt-10 sm:mt-12 px-4 sm:px-8 py-6 sm:py-8 bg-white rounded-2xl shadow-lg text-center"
  >
    {children}
  </section>
);

const SobreMi: React.FC = () => (
  <SectionContainer id="sobre-mi">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
      Sobre mí
    </h2>
    <img
      src={mifoto}
      alt="Pedro Castillo"
      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto shadow-md mb-4 object-cover"
    />
    <p className="text-gray-700 text-sm sm:text-base mb-2">¡Bienvenido/a!</p>
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      Soy Pedro Castillo, un profesional versátil con un enfoque integral en la
      comunicación y el desarrollo digital. Mi experiencia abarca la Locución,
      el Diseño Gráfico y la Programación, lo que me permite manejar proyectos
      desde la concepción creativa hasta la implementación técnica.
    </p>
  </SectionContainer>
);

const Experiencia: React.FC = () => (
  <SectionContainer id="experiencia">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
      Experiencia y Educación
    </h2>
    <ul className="text-gray-700 text-sm sm:text-base space-y-2">
      <li>🎙️ Locutor certificado N° 58.575 UCSAR</li>
      <li>💻 Estudiante de ingeniería de sistemas</li>
      <li>🎨 Diseñador gráfico freelancer</li>
      <li>📱 Social media manager</li>
    </ul>
  </SectionContainer>
);

const Entretenimiento: React.FC = () => (
  <SectionContainer id="entretenimiento">
    <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-indigo-700">
      Películas y series populares
    </h2>
    <div className="space-y-8">
      <SeriesTMDB />
      <Favoritas />
    </div>
  </SectionContainer>
);

const Contacto: React.FC = () => (
  <SectionContainer id="contacto">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
      Contacto
    </h2>
    <p className="text-gray-700 text-sm sm:text-base">
      Instagram: @pedroozziec
    </p>
    <p className="text-gray-700 text-sm sm:text-base">
      Email: pedrocastillog18@gmail.com
    </p>
    <p className="text-gray-700 text-sm sm:text-base">
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/"
        className="text-indigo-600 hover:underline"
      >
        linkedin.com/in/pedroozziec
      </a>
    </p>
    <p className="text-gray-700 text-sm sm:text-base">
      GitHub:{" "}
      <a
        href="https://www.github.com/"
        className="text-indigo-600 hover:underline"
      >
        github.com/pedroozzie
      </a>
    </p>
    <div className="mt-6">
      <Link
        to="/formulario"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-lg shadow transition"
      >
        Enviar mensaje
      </Link>
    </div>
  </SectionContainer>
);

const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
    <Header />
    <SobreMi />
    <Experiencia />
    <Entretenimiento />
    <Contacto />
    <footer className="text-center py-6 text-gray-500 mt-10 sm:mt-12 text-sm sm:text-base">
      © {new Date().getFullYear()} ozzie.com
    </footer>
  </div>
);

export default App;
