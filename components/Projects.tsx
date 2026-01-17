const projects = [
  {
    title: "Hotel PMS & Aggregator",
    company: "Fountane Makerspace",
    description: "Property management system serving 500+ properties with multi-channel integration",
    tech: ["Golang", "PostgreSQL", "Microservices"],
  },
  {
    title: "Staynow Booking Platform",
    company: "Fountane Makerspace",
    description: "Multi-tenant hotel booking platform with Cloudbeds & Sabre API integration",
    tech: ["NestJS", "React", "PostgreSQL"],
  },
  {
    title: "ComplyIQ Tax Platform",
    company: "Fountane Makerspace",
    description: "US tax filing system with dynamic form builder and automated workflows",
    tech: ["Express.js", "React", "PostgreSQL"],
  },
  {
    title: "Courier Dashboard",
    company: "Fountane Makerspace",
    description: "Logistics platform with real-time tracking and interactive analytics",
    tech: ["React", "GraphQL", "Chakra UI"],
  },
];

const otherProjects = [
  "Practitioner Platform (React, Node.js, Azure)",
  "QA Collaboration Tool (Svelte, Node.js)",
  "Real-time Notifications (Socket.io, Redis)",
  "Vehicle Tracking System (Node.js, MongoDB)",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2">Featured Work</h2>
        </div>

        {/* Featured projects - structured list */}
        <div className="mb-16 space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-slate-900/40 border border-slate-800 rounded-lg hover:border-slate-700 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sky-400 text-sm">{project.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Other projects - simple list */}
        <div className="border-t border-slate-800 pt-12">
          <h3 className="text-sm font-medium text-slate-500 mb-6">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {otherProjects.map((project, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-sky-400">▹</span>
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
