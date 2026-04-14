import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Courses from "./components/Courses";
import Results from "./components/Results";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Courses />
      <Results />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}