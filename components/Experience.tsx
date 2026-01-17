const experiences = [
  {
    company: "Fountane Makerspace",
    role: "Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of enterprise applications across hospitality, fintech, and logistics sectors.",
    tech: ["Golang", "NestJS", "React", "PostgreSQL"],
    achievements: [
      "Built hotel PMS serving 500+ properties",
      "Designed multi-tenant booking platform",
      "Created tax compliance automation system",
    ],
  },
  {
    company: "Hilsa Softsol",
    role: "Full Stack Web Developer",
    duration: "2018 - 2022",
    description: "Developed full-stack applications with focus on real-time systems and integration solutions.",
    tech: ["React", "Node.js", "GraphQL", "Azure"],
    achievements: [
      "Built community platform with Slack-like features",
      "Developed real-time notification engine",
      "Created QA platform with live collaboration",
    ],
  },
  {
    company: "MyNextMove.biz",
    role: "PHP Developer",
    duration: "2016 - 2018",
    description: "Started career building web applications and improving system security.",
    tech: ["PHP", "MySQL", "JavaScript"],
    achievements: [
      "Revamped job portal search system",
      "Implemented OTP authentication",
      "Built ERP admin dashboard",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-slate-900/30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Career</span>
          <h2 className="text-4xl font-bold text-white mt-2">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-start gap-8 mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 w-3 h-3 -translate-x-1/2 bg-sky-500 rounded-full border-4 border-slate-950 z-10"></div>

              {/* Content */}
              <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                <div className="p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <span className="px-3 py-1 bg-slate-800 text-sky-400 text-xs font-medium rounded-lg">{exp.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-sky-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-sky-400 rounded-full shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
