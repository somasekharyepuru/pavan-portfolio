export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-sky-400 font-medium">Hi, my name is</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pavan Karumuri.
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight">
            I build scalable web applications.
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
            Full Stack Developer with 9+ years of experience specializing in Node.js, React, Golang, and TypeScript.
            Currently helping businesses build production-ready solutions at{" "}
            <a href="https://fountane.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">
              Fountane Makerspace
            </a>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Check out my work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-6">
        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <a href="mailto:1andonlypa1@gmail.com" className="hover:text-sky-400 transition-colors">
            1andonlypa1@gmail.com
          </a>
          <span>•</span>
          <a href="https://pavan1.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            pavan1.com
          </a>
          <span>•</span>
          <span>+91-8328045299</span>
        </div>
      </div>
    </section>
  );
}
