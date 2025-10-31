import React, { useEffect, useState } from "react";

const CONFIG = {
  name: "Sneha Rathi",
  location: "Fairfax, VA",
  email: "sneha.rathi0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/sneha-rathi-679828333/",
  github: "https://github.com/SnehaRathi123",
  phone: "(571) 346 0311",
  resume: "SnehaRathi_Resume.pdf",
  headline:
    "Engineering Simplicity in Every Line of Code.",
};

const SUMMARY = `I’m a Master’s in Computer Science graduate from George Mason University with a passion for building scalable, intelligent, and user-centered software solutions. I love turning ideas into clean, functional web and cloud applications that make technology simple and impactful. My experience spans full-stack development, cloud deployment, and AI integration, from building RESTful APIs and automating workflows with Docker and Kubernetes to implementing CI/CD pipelines on AWS. I enjoy creating software that blends creativity with performance, solving real-world problems through code that works beautifully and efficiently.`;

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-2xl p-5 shadow-sm transition-colors">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const phrases = [
    "AI Systems",
    "Cloud Infrastructure",
    "Full-Stack Web Apps",
    "Intelligent Automation",
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleMail = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONFIG.email}&su=${subject}&body=${body}`;

    try {
      const win = window.open(gmailUrl, "_blank");
      if (!win) throw new Error("popup blocked");
    } catch {
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    }
    alert("📧 Your email client or Gmail is opening — please click 'Send' to complete your message.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b dark:border-slate-700 z-50 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">
            Sneha Rathi
          </a>

          <div className="hidden md:flex gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          <div className="hidden md:flex gap-2 text-sm items-center">
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 border rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <a
              className="px-3 py-1.5 border rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700"
              href={CONFIG.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="px-3 py-1.5 border rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700"
              href={CONFIG.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 border-t dark:border-slate-700 px-4 py-3 space-y-2 shadow-sm">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block hover:underline">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:underline">Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="block hover:underline">Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:underline">Contact</a>
            <hr className="border-slate-300 dark:border-slate-700" />
            <div className="flex gap-2">
              <a
                href={CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 border rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                LinkedIn
              </a>
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 border rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                GitHub
              </a>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 border rounded-xl text-sm hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-[220px,1fr] gap-6 items-center">
        <div className="w-52 h-52 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border dark:border-slate-700 shadow-sm flex flex-col items-center justify-center text-slate-800 dark:text-slate-100 transition-colors">
          <div className="text-3xl mb-2">⚙️</div>
          <p className="text-sm uppercase tracking-widest font-medium text-slate-600 dark:text-slate-400">
            Building
          </p>
          <p className={`text-lg font-semibold transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
            {phrases[phraseIndex]}
          </p>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{CONFIG.name}</h1>
          <p className="mt-3 text-sm md:text-base">{CONFIG.headline}</p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <span>📍 {CONFIG.location}</span>
            <a className="hover:underline" href={`mailto:${CONFIG.email}`}>
              ✉️ {CONFIG.email}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <a href={CONFIG.resume} download className="px-3 py-1.5 border rounded-xl bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About">
        <p className="leading-relaxed text-[15px] md:text-base">{SUMMARY}</p>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: "CI/CD Pipeline and Containerized Web App Deployment",
              date: "Mar 2025",
              summary:
                "Containerized a Java web application with Docker and deployed it on Kubernetes (multi-pod HA). Built a Jenkins CI/CD pipeline with GitHub Actions, reducing deployment time from hours to minutes.",
              tags: ["Java", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"],
            },
            {
              name: "Automatic Fire Response System (RTOS)",
              date: "Dec 2024",
              summary:
                "Developed a real-time fire alert system in C using DHT22 sensors, GPIO, and POSIX multithreading. Implemented scheduling, synchronization, and queue/buffer mechanisms for reliability.",
              tags: ["C", "POSIX Threads", "RTOS", "GPIO"],
            },
            {
              name: "Kitchen Alchemy – Recipe Management Web App",
              date: "Jun 2024",
              summary:
                "Built a responsive recipe app with search, favorites, and reviews. Conducted heuristic evaluations and usability testing to refine UI/UX.",
              tags: ["React", "Frontend", "UX", "Agile"],
            },
            {
              name: "Movie Database Management System",
              date: "Aug 2023",
              summary:
                "Designed optimized SQL schema for movies, reviews, and distributors. Enhanced query performance using indexing and normalization.",
              tags: ["SQL", "Database", "Indexing"],
            },
          ].map((p) => (
            <div key={p.name} className="border rounded-xl p-4 dark:border-slate-700 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-xs text-slate-500">{p.date}</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs border dark:border-slate-600 rounded-full px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {[
            {
              role: "Graduate Research Volunteer",
              org: "George Mason University",
              when: "Sep 2023 – Present",
              where: "Fairfax, VA",
              bullets: [
                "Built Java/Python prototypes for code generation and automated debugging experiments.",
                "Refactored legacy components, improving tool efficiency by 25%.",
                "Contributed 100+ hours of research on AI assistants for programming/ML; documented results.",
                "Enhanced automation and debugging tools for research workflows.",
              ],
            },
            {
              role: "Cloud Engineer Trainee",
              org: "Devpoint Solutions Pvt. Ltd.",
              when: "May 2022 – July 2023",
              where: "Hyderabad, India",
              bullets: [
                "Deployed and managed AWS-based applications with optimized configurations.",
                "Set up Docker containers and Kubernetes clusters, reducing manual deploy time by 20%.",
                "Implemented CI/CD pipelines using GitHub Actions and Jenkins.",
                "Integrated GPT APIs into React apps; monitored and troubleshot cloud infrastructure.",
              ],
            },
            {
              role: "AI/ML Software Engineer Intern",
              org: "SmartKnower",
              when: "Apr 2021 – Jun 2021",
              where: "Remote",
              bullets: [
                "Built an SVM image classifier with 89% accuracy using GridSearchCV tuning.",
                "Automated ETL for 100K+ images, reducing preprocessing time by 30%.",
                "Developed REST APIs with Flask & FastAPI for model inference.",
                "Validated models using precision, recall, F1-score, and confusion matrix.",
              ],
            },
          ].map((exp) => (
            <div key={exp.role} className="border rounded-xl p-4 dark:border-slate-700">
              <h3 className="text-lg font-semibold">
                {exp.role} ·{" "}
                <span className="font-normal text-slate-600 dark:text-slate-400">{exp.org}</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                {exp.when} · {exp.where}
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5 text-sm leading-relaxed">
            <p className="text-base text-slate-700 dark:text-slate-300">
               I love building things that combine
              technology and creativity. Let’s connect!
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a href={`mailto:${CONFIG.email}`} className="hover:underline">
                  {CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href={`tel:${CONFIG.phone}`} className="hover:underline">
                  {CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">💼</span>
                <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">💻</span>
                <a href={CONFIG.github} target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-3" onSubmit={handleMail}>
            <input className="w-full border rounded-xl px-3 py-2 dark:bg-slate-800 dark:border-slate-700" name="name" placeholder="Your Name" required />
            <input className="w-full border rounded-xl px-3 py-2 dark:bg-slate-800 dark:border-slate-700" name="email" placeholder="Your Email" required />
            <textarea className="w-full border rounded-xl px-3 py-2 min-h-[120px] dark:bg-slate-800 dark:border-slate-700" name="message" placeholder="Hi Sneha, I’d love to collaborate on..." required />
            <button className="w-full px-3 py-2 rounded-xl bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t dark:border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">{CONFIG.name}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
