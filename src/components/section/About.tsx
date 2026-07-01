import { Cpu, User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="w-full py-12 space-y-8 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <Cpu className="h-4 w-4"></Cpu>
                    About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Engineering reliable solutions with clean design.
                </h2>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-start">
                {/*
                  TODO: add your photo at /public/profile.jpg, then replace the
                  placeholder <div> below with:

                  import Image from "next/image";
                  <Image
                      src="/profile.jpg"
                      alt="Chris Ferbianto"
                      width={224}
                      height={224}
                      className="rounded-2xl object-cover w-40 h-40 sm:w-56 sm:h-56"
                  />
                */}
                <div className="shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-2xl border border-muted/60 bg-muted/40 flex items-center justify-center text-muted-foreground/50">
                    <User className="h-10 w-10" />
                </div>

                {/* Biography paragraph */}
                <div className="max-w-2xl space-y-6 text-muted-foreground sm:text-lg leading-relaxed">
                    <p>
                        I am a software engineer dedicated to building performant, secure, and user-centric applications. With a strong foundation in both visual design and architectural precision, I bridge the gap between complex backend logic and clean, intuitive interfaces.
                    </p>
                    <p>
                        Whether implementing structured domain-driven patterns, containerizing workflows for deterministic environments, or auditing database safety, I focus on building software that handles scale smoothly while providing an exceptional developer and end-user experience.
                    </p>
                </div>
            </div>
        </section>
    );
}
