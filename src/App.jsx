import profile from "./assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import projectImage from "./assets/project1.png";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">

        <h2 className="text-2xl font-bold text-sky-400">
          Subhani
        </h2>

        <div className="flex gap-6">
          <a href="#about" className="hover:text-sky-400">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>
          <a href="#certifications">Certifications</a>

          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">

        <img
          src={profile}
          alt="Subhani"
          className="w-44 h-44 rounded-full border-4 border-sky-400 object-cover"
        />

        <h1 className="text-4xl md:text-6xl font-bold mt-8 text-sky-400">
          Shaik Subhani
        </h1>

        <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
          MCA Graduate
        </h2>

        <p className="max-w-2xl mt-6 text-gray-400">
          Aspiring Software Developer with expertise in Java, Python, SQL, HTML, CSS, and JavaScript. Passionate about building scalable applications, creating engaging user experiences, and continuously enhancing my technical skills.
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-8 bg-sky-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-sky-600 transition"
        >
          Download Resume
        </a>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">

          <h2 className="text-4xl font-bold text-sky-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            MCA graduate at Vignan University seeking a Trainee Software Engineer role. Proficient in Python and OOP concepts and Hands-on
experience in frontend development, having designed and built a Supportive Hub web application using HTML, CSS, and JavaScript to assist
specially-abled children. Immediate joiner dedicated to building scalable and reliable automated tools.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 pb-20"
      >

        <h2 className="text-4xl font-bold text-sky-400 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "MS Excel",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 px-5 py-3 rounded-xl hover:bg-sky-500 hover:text-black transition duration-300"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 pb-20"
      >

        <h2 className="text-4xl font-bold text-sky-400 mb-8">
          Projects
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 hover:scale-105 transition duration-300">
          <img
  src={projectImage}
  alt="Supportive Hub"
  className="rounded-xl mb-6 shadow-lg"
/>

          <h3 className="text-2xl font-semibold text-sky-300">
            Supportive Hub for Specially-Abled Child
          </h3>

          <p className="mt-4 text-gray-300 leading-7">
            Developed an AI-powered web application that assists
            visually impaired, hearing-impaired, and speech-impaired
            children through object detection, speech-to-text,
            text-to-speech, and multilingual support.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <span className="bg-sky-500 text-black px-3 py-1 rounded-lg">
              HTML
            </span>

            <span className="bg-sky-500 text-black px-3 py-1 rounded-lg">
              CSS
            </span>

            <span className="bg-sky-500 text-black px-3 py-1 rounded-lg">
              JavaScript
            </span>

            <span className="bg-sky-500 text-black px-3 py-1 rounded-lg">
              TensorFlow.js
            </span>

          </div>

        </div>

      </section>
     {/* Certifications */}
<section
  id="certifications"
  className="max-w-5xl mx-auto px-6 pb-20"
>
  <h2 className="text-4xl font-bold text-sky-400 mb-8">
    Certifications
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    
    {/* SQL Advanced */}
    <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-xl font-semibold text-sky-300">
        SQL Advanced Certificate
      </h3>

      <p className="text-gray-400 mt-2 mb-4">
        Advanced SQL concepts including joins and subqueries.
      </p>

      <a
        href="/certificates/sql-advanced.pdf"
        target="_blank"
        rel="noreferrer"
        className="bg-sky-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-sky-600"
      >
        View Certificate
      </a>

    </div>

    {/* Excel */}
    <div className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition duration-300">

      <h3 className="text-xl font-semibold text-sky-300">
        MS Excel Certification
      </h3>

      <p className="text-gray-400 mt-2 mb-4">
        Data analysis, formulas, functions, and spreadsheet management.
      </p>

      <a
        href="/certificates/ms-excel.pdf"
        target="_blank"
        rel="noreferrer"
        className="bg-sky-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-sky-600"
      >
        View Certificate
      </a>

    </div>

  </div>
</section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 pb-20"
      >

        <h2 className="text-4xl font-bold text-sky-400 mb-8">
          Contact Me
        </h2>

        <div className="bg-slate-900 p-8 rounded-2xl">

          <p className="text-gray-300 mb-6">
            Feel free to connect with me.
          </p>

          <div className="flex gap-8 text-4xl">

            <a
              href="https://github.com/subhani9121"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-subhani-6b0aa9293/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="subhani9121sk@gmail.com"
              className="hover:text-sky-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        © 2026 Shaik Subhani • Built with React & Tailwind CSS
      </footer>

    </div>
  );
}

export default App;