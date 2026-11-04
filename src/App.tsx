import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { QualityAssurance } from "./components/QualityAssurance";
import { Approach } from "./components/Approach";
import { AboutStudio } from "./components/AboutStudio";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background flex flex-col justify-between">
      {/* WCAG 2.1 AA/AAA Skip to Content landmark */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Projects />
        <QualityAssurance />
        <Approach />
        <AboutStudio />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
