const education = [
  {
    degree: "B.Tech",
    field: "Engineering",
    institution: "VISIT Engineering College, Tadepalligudem",
    year: "2015",
  },
  {
    degree: "Diploma",
    field: "Technical Education",
    institution: "SMVM Polytechnic, Tanuku",
    year: "2012",
  },
  {
    degree: "SSC",
    field: "Secondary Education",
    institution: "ZP High School, Tadepalligudem",
    year: "2009",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">Background</span>
          <h2 className="text-4xl font-bold text-white mt-2">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="p-6 bg-slate-900/40 border border-slate-800 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="px-3 py-1 bg-slate-800 text-sky-400 text-sm font-medium rounded whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
