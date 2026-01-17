export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-sm text-slate-400">Available for freelance projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Pavan Karumuri
          </h1>

          <p className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
            Full Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
            9+ years of experience building web applications with Node.js, React, Golang, and TypeScript.
            Based in India, working with clients globally.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="mailto:1andonlypa1@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-400 font-medium hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
