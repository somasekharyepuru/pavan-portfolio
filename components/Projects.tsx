const projects = [
  {
    title: "Hotel PMS & Aggregator",
    category: "Hospitality",
    description: "Comprehensive property management with multi-channel integration",
    tech: ["Golang", "PostgreSQL"],
    featured: true,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Staynow Booking Platform",
    category: "E-Commerce",
    description: "Multi-tenant hotel booking with Cloudbeds & Sabre APIs",
    tech: ["NestJS", "React"],
    featured: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "ComplyIQ Tax Platform",
    category: "FinTech",
    description: "US tax filing with dynamic form builder",
    tech: ["Express.js", "React"],
    featured: false,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Courier Dashboard",
    category: "Logistics",
    description: "Real-time tracking with interactive analytics",
    tech: ["React", "GraphQL"],
    featured: false,
    color: "from-orange-500 to-rose-500",
  },
  {
    title: "Practitioner Platform",
    category: "Healthcare",
    description: "Community tools with Azure integration",
    tech: ["React", "Node.js"],
    featured: false,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "QA Collaboration Tool",
    category: "SaaS",
    description: "Real-time QA with live subscriptions",
    tech: ["Svelte", "Node.js"],
    featured: false,
    color: "from-pink-500 to-rose-500",
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl font-bold text-white mt-2">Featured Projects</h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured - Large cards */}
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative overflow-hidden rounded-3xl p-8 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''} group`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="absolute inset-0 bg-slate-900/50"></div>

              {/* Border */}
              <div className="absolute inset-0 border border-slate-700 rounded-3xl group-hover:border-slate-600 transition-colors"></div>

              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-medium rounded-full mb-4`}>
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 text-slate-300 text-sm rounded-lg border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Other projects - Smaller cards */}
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-2xl p-6 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
              <div className="absolute inset-0 bg-slate-900/70"></div>
              <div className="absolute inset-0 border border-slate-800 rounded-2xl group-hover:border-slate-700 transition-colors"></div>

              <div className="relative z-10">
                <span className="text-xs text-slate-500 font-medium">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-2 mt-1">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
