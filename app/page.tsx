import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Pavan Karumuri</p>
          <div className="flex items-center gap-6">
            <a href="mailto:1andonlypa1@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://pavan1.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Website</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
