const skills = [
  { name: "Node.js", level: 95, category: "Backend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Golang", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 88, category: "Database" },
  { name: "GraphQL", level: 82, category: "API" },
  { name: "NestJS", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
];

const tools = ["VS Code", "Git", "Docker", "AWS", "Azure", "Prisma", "Redis", "Socket.io"];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Skills with progress */}
          <div>
            <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-12">Core Skills</h2>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500 px-2 py-0.5 bg-slate-800 rounded">{skill.category}</span>
                    </div>
                    <span className="text-sm text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500 rounded-full transition-all duration-500 group-hover:bg-sky-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tools & Technologies */}
          <div>
            <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Tools</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-12">Technologies</h2>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-400">
                      {tool[0]}
                    </div>
                    <span className="text-slate-300 font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
