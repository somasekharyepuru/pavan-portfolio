const education = [
  { degree: "B.Tech", school: "VISIT Engineering College", year: "2015" },
  { degree: "Diploma", school: "SMVM Polytechnic", year: "2012" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Education</h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <span className="text-slate-600">{edu.year}</span>
              </div>
              <p className="text-slate-400">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
