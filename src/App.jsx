import React from "react";
const CONFIG = {
  name: "Sneha Rathi",
  location: "Fairfax, VA",
 // phone: "(571) 346 0311",
  email: "sneha.rathi0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/sneha-rathi-679828333/",
  github: "https://github.com/SnehaRathi123",
  headshot: "/headshot1.jpeg",
  phone: "(571) 346 0311",
  resume: "/SnehaRathi_Resume.pdf",
  headline: "I love coding things that work beautifully, from full stack web apps to scalable cloud systems.",
};
const SUMMARY = `I’m a Master’s in Computer Science graduate from George Mason University with a passion for building scalable, intelligent, and user-centered software solutions. I love turning ideas into clean, functional web and cloud applications that make technology simple and impactful. My experience spans full-stack development, cloud deployment, and AI integration — from building RESTful APIs and automating workflows with Docker and Kubernetes to implementing CI/CD pipelines on AWS. I enjoy creating software that blends creativity with performance, solving real-world problems through code that works beautifully and efficiently.`;
const EXPERIENCE = [
  { role: "Graduate Research Volunteer", org: "George Mason University", when: "Sep 2023 – Present", where: "Fairfax, VA",
    bullets: ["Built Java/Python prototypes for code generation and automated debugging experiments.",
      "Refactored legacy components and enhanced modular subsystems (tool efficiency +25%).",
      "Contributed 100+ hours of research on AI assistants for programming/ML; documented results.",
      "Improved automation & debugging tools to support research workflows."]},
  { role: "Cloud Engineer Trainee", org: "Devpoint Solutions Pvt. Ltd.", when: "May 2022 – July 2023", where: "Hyderabad, India",
    bullets: ["Deployed and managed AWS-based applications; improved reliability via optimized configs.",
      "Set up Docker containers and basic Kubernetes clusters (manual deploy time −20%).",
      "Built CI/CD pipelines with GitHub Actions; automated build, test, and release steps.",
      "Integrated GPT-powered APIs into React apps; monitored and troubleshot cloud infra."]},
  { role: "AI/ML Software Engineer Intern", org: "SmartKnower", when: "Apr 2021 – June 2021", where: "Remote",
    bullets: ["Developed an SVM image classifier achieving 89% accuracy (GridSearchCV tuning).",
      "Created Python ETL to process 100K+ images; cut preprocessing time by 30%.",
      "Built REST APIs with Flask & FastAPI enabling sub-second inference.",
      "Validated models using precision/recall/F1/confusion matrix for reliable deployment."]}
];
const EDUCATION = [
  { school: "George Mason University", degree: "Master of Science, Computer Science", when: "Aug 2023 – May 2025", where: "Fairfax, VA" },
  { school: "Jawaharlal Nehru Institute of Technology", degree: "Bachelor of Technology, Computer Science", when: "Aug 2019 – Jun 2023", where: "Hyderabad, India" }
];
const PROJECTS = [
  { name: "CI/CD Pipeline and Containerized Web App Deployment", date: "Mar 2025",
    summary: "Containerized a Java web application with Docker and deployed on Kubernetes (multi-pod HA). Implemented a Jenkins CI/CD pipeline with GitHub Actions to cut deployment time from hours to minutes.",
    links: [], tags: ["Java", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"]},
  { name: "Automatic Fire Response System (RTOS)", date: "Dec 2024",
    summary: "Real-time fire alert system in C using DHT22 sensors, GPIO, and POSIX multithreading with a live console interface; applied scheduling, synchronization, and queue/buffer data structures.",
    links: [], tags: ["C", "POSIX Threads", "RTOS", "GPIO"]},
  { name: "Kitchen Alchemy – Recipe Management Web App", date: "Jun 2024",
    summary: "Full-stack recipe management app with search, reviews, and favorites; agile iterations with user feedback and heuristic evaluations; responsive UI/UX.",
    links: [ ], tags: ["React", "Frontend", "UX", "Agile"]},
  { name: "Movie Database Management System", date: "Aug 2023",
    summary: "Oracle-style schema and optimized SQL for movies, reviews, awards, and distributors; improved query performance via indexing and schema optimization.",
    links: [], tags: ["SQL", "Database", "Indexing"]}
];
function Section({ id, title, children }) {
  return (<section id={id} className="max-w-5xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="bg-white border rounded-2xl p-5 shadow-sm">{children}</div>
  </section>);
}
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold">Sneha Rathi</a>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex gap-2 text-sm">
            <a className="px-3 py-1.5 border rounded-xl hover:bg-slate-100" href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="px-3 py-1.5 border rounded-xl hover:bg-slate-100" href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </nav>
      <section id="home" className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-[220px,1fr] gap-6 items-center">
        <img src={CONFIG.headshot} alt={CONFIG.name} className="w-52 h-52 rounded-2xl object-cover border shadow" />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{CONFIG.name}</h1>
          <p className="text-slate-600 mt-1">{CONFIG.title}</p>
          <p className="mt-3 text-sm md:text-base">{CONFIG.headline}</p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <span>📍 {CONFIG.location}</span>
            
            <a className="hover:underline" href={`mailto:${CONFIG.email}`}>✉️ {CONFIG.email}</a>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
  <a
    href={CONFIG.resume}
    download
    className="px-3 py-1.5 border rounded-xl bg-slate-900 text-white hover:bg-slate-800"
  >
    Download Resume
  </a>
</div>
      </section>
      <Section id="about" title="About">
        <p className="leading-relaxed text-[15px] md:text-base">{SUMMARY}</p>
      </Section>
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <div key={p.name} className="border rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-xs text-slate-500">{p.date}</span>
              </div>
              <p className="text-sm mb-3">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t) => <span key={t} className="text-xs border rounded-full px-2 py-1">{t}</span>)}
              </div>
              {p.links?.length ? (
                <div className="flex gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} className="text-sm px-3 py-1.5 border rounded-xl hover:bg-slate-100" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="border rounded-xl p-4">
              <h3 className="text-lg font-semibold">{e.role} · <span className="font-normal text-slate-600">{e.org}</span></h3>
              <p className="text-sm text-slate-600 mb-2">{e.when} · {e.where}</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION.map((ed) => (
            <div key={ed.school} className="border rounded-xl p-4">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm">{ed.degree}</p>
              <p className="text-sm text-slate-600">{ed.when} · {ed.where}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-2 text-sm">
            <p>Open to full-time Software/Cloud roles. Let’s connect!</p>
            <p><strong>Email:</strong> <a className="hover:underline" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
            <p><strong>Phone:</strong> <a className="hover:underline" href={`tel:${CONFIG.phone}`}>{CONFIG.phone}</a></p>
            <p><strong>LinkedIn:</strong> <a className="hover:underline" href={CONFIG.linkedin} target="_blank" rel="noreferrer">{CONFIG.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a className="hover:underline" href={CONFIG.github} target="_blank" rel="noreferrer">{CONFIG.github}</a></p>
          </div>
          <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); window.location.href = `mailto:${CONFIG.email}`;}}>
            <input className="w-full border rounded-xl px-3 py-2" placeholder="Your Name" required />
            <input className="w-full border rounded-xl px-3 py-2" type="email" placeholder="Your Email" required />
            <textarea className="w-full border rounded-xl px-3 py-2 min-h-[120px]" placeholder="Hi Sneha, we’d love to chat about…" required />
            <button className="w-full px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Send Email</button>
          </form>
        </div>
      </Section>
      <footer className="border-t">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-medium">{CONFIG.name}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-slate-500 text-xs">Built with React + Tailwind</div>
        </div>
      </footer>
    </div>
  );
}
