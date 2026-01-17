export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Gradient orbs background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Building</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Products
              </span>
              <br />
              <span className="text-white">That Scale</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-md leading-relaxed">
              Full Stack Developer with 9+ years crafting high-performance web applications
              using Node.js, React, Golang & TypeScript.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25">
                Start a Project
              </a>
              <a href="#projects" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors">
                View Work
              </a>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">9+</div>
              <div className="text-slate-400 text-sm">Years of Experience</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 mt-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-slate-400 text-sm">Projects Shipped</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-slate-400 text-sm">Industries Served</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 mt-8">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
