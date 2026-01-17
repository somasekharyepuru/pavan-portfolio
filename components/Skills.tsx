export default function Skills() {
  const skills = [
    "TypeScript", "JavaScript", "Node.js", "React", "Next.js",
    "NestJS", "Golang", "PHP", "PostgreSQL", "MySQL", "MongoDB",
    "Redis", "GraphQL", "AWS", "Azure", "Docker", "Git"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Technologies</h2>
        </div>

        <div className="flex flex-wrap gap-4 max-w-4xl">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-slate-400 hover:text-sky-400 transition-colors cursor-default text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
