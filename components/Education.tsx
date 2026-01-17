const education = [
  {
    degree: "B.Tech",
    field: "Engineering",
    institution: "VISIT Engineering College",
    location: "Tadepalligudem",
    year: "2015",
    score: "62%",
  },
  {
    degree: "Diploma",
    field: "Technical Education",
    institution: "SMVM Polytechnic",
    location: "Tanuku",
    year: "2012",
    score: "76.3%",
  },
  {
    degree: "SSC",
    field: "Secondary Education",
    institution: "ZP High School",
    location: "Tadepalligudem",
    year: "2009",
    score: "69%",
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

        {/* Horizontal scroll cards on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none -mx-6 px-6 lg:mx-0 lg:px-0">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="min-w-[280px] lg:min-w-0 snap-center relative group"
            >
              {/* Card */}
              <div className="h-full p-6 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-700 transition-all">
                {/* Year badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-slate-800 text-sky-400">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-400 text-sm mb-4">{edu.field}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-slate-400">{edu.institution}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-slate-500">{edu.location}</span>
                  </div>
                </div>

                {/* Score */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">Score</span>
                    <span className="text-lg font-bold text-sky-400">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
