export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Full Stack</span>
              <br />
              <span className="text-sky-400">Developer</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              9+ years building scalable web applications. Specialized in Node.js, React, Golang & TypeScript.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
                View Projects
              </a>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-4xl font-bold text-sky-400 mb-2">9+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl mt-8">
              <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
              <div className="text-slate-400 text-sm">Projects Delivered</div>
            </div>
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl">
              <div className="text-4xl font-bold text-sky-400 mb-2">3</div>
              <div className="text-slate-400 text-sm">Companies</div>
            </div>
            <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl mt-8">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm">Delivery Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
