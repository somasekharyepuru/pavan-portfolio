const categories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Golang", "PHP", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Svelte", "Tailwind CSS", "Chakra UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs", "Socket.io"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Git", "CI/CD"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Postman", "Linux", "Agile", "JIRA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-700 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <div className="text-3xl font-bold text-sky-400 mb-2">9+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <div className="text-3xl font-bold text-sky-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Projects</div>
          </div>
          <div className="text-center p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <div className="text-3xl font-bold text-sky-400 mb-2">3</div>
            <div className="text-slate-400 text-sm">Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
