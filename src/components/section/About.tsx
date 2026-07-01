import { Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="w-full py-12 space-y-8 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <Cpu className="h-4 w-4"></Cpu>
                    About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Building reliable backend systems and automation.
                </h2>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <Image
                    src="/profile.jpg"
                    alt="Chris Ferbianto"
                    width={224}
                    height={224}
                    className="rounded-2xl object-cover w-40 h-40 sm:w-56 sm:h-56"
                />

                {/* Biography paragraph */}
                <div className="max-w-2xl space-y-8">
                    <div className="space-y-6 text-muted-foreground sm:text-lg leading-relaxed">
                        <p>
                            For the past 7 years I've built the software behind manufacturing operations — APIs and integrations with third-party systems, automations that cut manual work, and platforms spanning backend services, web, and desktop.
                        </p>
                        <p>
                            I work mostly on the backend with C# and Python, deploying containerized services with Docker and Kubernetes. I enjoy collaborative team environments and continuously learning to adapt to new challenges.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                Education
                            </h3>
                            <p className="text-sm text-foreground">Bachelor of Information System</p>
                            <p className="text-sm text-muted-foreground">Universitas Putera Batam · 2015 – 2019</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                Languages
                            </h3>
                            <p className="text-sm text-muted-foreground">Bahasa Indonesia</p>
                            <p className="text-sm text-muted-foreground">English</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
