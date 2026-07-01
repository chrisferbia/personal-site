import Navbar from "@/components/Navbar";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";
import Experience from "@/components/section/Experience";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Navbar/>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
