export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="text-sky-400 font-medium tracking-wide">FULL STACK DEVELOPER</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter">
          Pavan<br />
          <span className="text-slate-600">Karumuri</span>
        </h1>

        <div className="space-y-6 mb-12">
          <p className="text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
            Building scalable applications with modern technologies since 2016.
          </p>
          <p className="text-lg text-slate-500 max-w-xl">
            Based in India, working globally. Currently at{" "}
            <span className="text-slate-400">Fountane Makerspace</span>.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:1andonlypa1@gmail.com"
            className="px-8 py-4 bg-white text-slate-900 font-medium rounded hover:bg-slate-100 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="text-slate-400 hover:text-white transition-colors"
          >
            View work →
          </a>
        </div>
      </div>
    </section>
  );
}
