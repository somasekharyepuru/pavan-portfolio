const skills = {
  "Languages & Frameworks": [
    "TypeScript", "JavaScript", "Node.js", "React", "Next.js", "NestJS", "Golang", "PHP"
  ],
  "Databases & Storage": [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"
  ],
  "Cloud & Tools": [
    "AWS", "Azure", "Docker", "Git", "GraphQL", "REST APIs", "Socket.io"
  ],
  "Frontend": [
    "HTML5", "CSS3", "Tailwind CSS", "Chakra UI", "Svelte"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills & Technologies</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-slate-900/40 border border-slate-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded hover:text-sky-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">9+</div>
              <div className="text-slate-500 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">50+</div>
              <div className="text-slate-500 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">Full</div>
              <div className="text-slate-500 text-sm">Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
