import Hero from "@/components/section/Hero";
import About from "@/components/section/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero/>
        <About/>
      </main>
    </div>
  );
}
