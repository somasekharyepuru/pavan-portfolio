const projects = [
  {
    title: "Hotel PMS & Aggregator",
    description: "Property management system serving 500+ properties",
    tech: "Golang • PostgreSQL",
  },
  {
    title: "Staynow Booking Platform",
    description: "Multi-tenant hotel booking with Cloudbeds & Sabre",
    tech: "NestJS • React",
  },
  {
    title: "ComplyIQ Tax Platform",
    description: "US tax filing with dynamic forms",
    tech: "Express.js • React",
  },
  {
    title: "Courier Dashboard",
    description: "Real-time logistics tracking",
    tech: "React • GraphQL",
  },
  {
    title: "Practitioner Platform",
    description: "Healthcare community tools",
    tech: "React • Node.js",
  },
  {
    title: "QA Collaboration Tool",
    description: "Real-time QA platform",
    tech: "Svelte • Node.js",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-800">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 p-8 hover:bg-slate-900 transition-colors group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-4">{project.description}</p>
              <p className="text-sm text-slate-600">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
