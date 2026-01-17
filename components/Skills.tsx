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

        <div className="max-w-4xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-slate-400 hover:text-sky-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-20 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            9+ years of experience • 50+ projects delivered • Full-stack development
          </p>
        </div>
      </div>
    </section>
  );
}
