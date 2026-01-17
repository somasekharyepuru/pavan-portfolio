const experiences = [
  {
    company: "Fountane Makerspace",
    role: "Full Stack Developer",
    duration: "2022 — Present",
    description: "Building enterprise applications in hospitality, fintech, and logistics.",
  },
  {
    company: "Hilsa Softsol",
    role: "Full Stack Web Developer",
    duration: "2018 — 2022",
    description: "Developed real-time systems and integration solutions.",
  },
  {
    company: "MyNextMove.biz",
    role: "PHP Developer",
    duration: "2016 — 2018",
    description: "Started career building web applications.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Experience</h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l border-slate-800 pl-8 relative">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-slate-950 border-2 border-sky-400 rounded-full"></div>

              <div className="mb-2">
                <span className="text-slate-500 text-sm">{exp.duration}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-sky-400 font-medium mb-3">{exp.company}</p>
              <p className="text-slate-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
