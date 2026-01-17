const projects = [
  {
    title: "Hotel PMS & Aggregator",
    category: "Hospitality",
    description: "Comprehensive property management with multi-channel integration",
    tech: ["Golang", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Staynow Booking Platform",
    category: "E-Commerce",
    description: "Multi-tenant hotel booking with Cloudbeds & Sabre APIs",
    tech: ["NestJS", "React"],
    featured: true,
  },
  {
    title: "ComplyIQ Tax Platform",
    category: "FinTech",
    description: "US tax filing with dynamic form builder",
    tech: ["Express.js", "React"],
    featured: false,
  },
  {
    title: "Courier Dashboard",
    category: "Logistics",
    description: "Real-time tracking with interactive analytics",
    tech: ["React", "GraphQL"],
    featured: false,
  },
  {
    title: "Practitioner Platform",
    category: "Healthcare",
    description: "Community tools with Azure integration",
    tech: ["React", "Node.js"],
    featured: false,
  },
  {
    title: "QA Collaboration Tool",
    category: "SaaS",
    description: "Real-time QA with live subscriptions",
    tech: ["Svelte", "Node.js"],
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2">Featured Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured - Large cards */}
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="md:col-span-2 lg:col-span-1 relative overflow-hidden rounded-xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <span className="inline-block px-3 py-1 bg-slate-800 text-sky-400 text-xs font-medium rounded-lg mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Other projects */}
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <span className="text-xs text-slate-500 font-medium">{project.category}</span>
              <h3 className="text-lg font-bold text-white mb-2 mt-1 group-hover:text-sky-400 transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
