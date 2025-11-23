import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import mifoto from "../assets/mifoto.jpg";
import SeriesTMDB from "../components/SeriesTMDB";
import Favoritas from "../components/Favoritas";
import Spinner from "../components/Spinner";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <motion.header
      style={{ y }}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-center py-8 sm:py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">Pedro Castillo</h1>
      <p className="text-sm sm:text-lg opacity-90">
        Locución, diseño gráfico y programación
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-4 px-3">
        {["sobre-mi", "experiencia", "entretenimiento", "contacto"].map((id) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            key={id}
            href={`#${id}`}
            className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs sm:text-base transition"
          >
            {id.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
          </motion.a>
        ))}
      </div>
    </motion.header>
  );
};

const SectionContainer: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => (
  <motion.section
    id={id}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="max-w-3xl mx-auto mt-10 sm:mt-12 px-4 sm:px-8 py-6 sm:py-8 bg-white rounded-2xl shadow-lg text-center"
  >
    {children}
  </motion.section>
);

const SobreMi: React.FC = () => (
  <SectionContainer id="sobre-mi">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
      Sobre mí
    </h2>

    <motion.img
      src={mifoto}
      alt="Pedro Castillo"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto shadow-md mb-4 object-cover"
    />

    <motion.p className="text-gray-700 text-sm sm:text-base mb-2" variants={fade}>
      ¡Bienvenido/a!
    </motion.p>

    <motion.p
      className="text-gray-700 text-sm sm:text-base leading-relaxed"
      variants={fade}
    >
      Soy Pedro Castillo, un profesional versátil con un enfoque integral en la comunicación 
      y el desarrollo digital. Mi experiencia abarca la Locución, el Diseño Gráfico y la Programación,
      lo que me permite manejar proyectos desde la concepción creativa hasta la implementación técnica.
    </motion.p>
  </SectionContainer>
);

const Experiencia: React.FC = () => (
  <SectionContainer id="experiencia">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
      Experiencia y Educación
    </h2>

    <motion.ul className="text-gray-700 text-sm sm:text-base space-y-2" variants={fade}>
      <li>🎙️ Locutor certificado N° 58.575 UCSAR</li>
      <li>💻 Estudiante de ingeniería de sistemas</li>
      <li>🎨 Diseñador gráfico freelancer</li>
      <li>📱 Social media manager</li>
    </motion.ul>
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
    <motion.div variants={fade} initial="hidden" animate="visible">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-indigo-700">
        Contacto
      </h2>

      <p className="text-gray-700 text-sm sm:text-base mb-2">
        Email:{" "}
        <a
          href="mailto:pedrocastillog18@gmail.com"
          className="text-indigo-600 hover:underline"
        >
          pedrocastillog18@gmail.com
        </a>
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.instagram.com/pedroozziec"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-2xl hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/pedroozziec"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 text-2xl hover:scale-110 transition-transform"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.github.com/pedroozzie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-2xl hover:scale-110 transition-transform"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-6">
        <Link
          to="/formulario"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base px-5 sm:px-6 py-2 rounded-lg shadow transition"
        >
          Enviar mensaje
        </Link>
      </div>
    </motion.div>
  </SectionContainer>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && <Spinner />}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100"
      >
        <Header />
        <SobreMi />
        <Experiencia />
        <Entretenimiento />
        <Contacto />

        <footer className="text-center py-6 text-gray-500 mt-10 sm:mt-12 text-sm sm:text-base">
          © {new Date().getFullYear()} ozzie.com
        </footer>
      </motion.div>
    </>
  );
};

export default App;
