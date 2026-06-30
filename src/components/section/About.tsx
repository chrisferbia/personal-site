import { Terminal, Code2, Layers, Cpu } from "lucide-react";
import { Badge } from "../ui/badge";

const coreSkills = [
    {
        icon: <Code2 className="h-5 w-5 text-primary" />,
        title: "Frontend Engineering",
        description: "Crafting responsive, semantic, and highly interactive user interfaces using Next.js, React, and Tailwind CSS.",
    },
    {
        icon: <Terminal className="h-5 w-5 text-primary" />,
        title: "Backend & Databases",
        description: "Designing structured RESTful or GraphQL APIs, handling robust server-side architecture, and managing SQL database integrity.",
    },
    {
        icon: <Layers className="h-5 w-5 text-primary" />,
        title: "Architecture & Isolation",
        description: "Emphasizing clean code principles, modular system design, and isolated testing environments for software predictability.",
    },
];

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "C#", ".NET Core", "SQL Server", "Docker", "Git"
];

export default function About() {
    return (
        <section id="about" className="w-full py-12 space-y-12 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <Cpu className="h-4 w-4"></Cpu>
                    About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Engineering reliable solutions with clean design.
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Biography paragraph */}
                <div className="lg:col-span-2 space-y-6 text-muted-foreground sm:text-lg leading-relaxed">
                    <p>
                        I am a software engineer dedicated to building performant, secure, and user-centric applications. With a strong foundation in both visual design and architectural precision, I bridge the gap between complex backend logic and clean, intuitive interfaces.
                    </p>
                    <p>
                        Whether implementing structured domain-driven patterns, containerizing workflows for deterministic environments, or auditing database safety, I focus on building software that handles scale smoothly while providing an exceptional developer and end-user experience.
                    </p>
                    {/* Techstack pills */}
                    <div className="pt-4">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                            Core Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {
                                techStack.map((tech) => (
                                    <Badge key={tech} variant="outline" className="px-3 py-1 text-sm font-medium border-muted-foreground/20 hover:border-primary/50 transition-colors">
                                        {tech}
                                    </Badge>
                                ))
                            }

                        </div>
                    </div>

                    {/* Feature Card columns */}
                    <div className="flex flex-col gap-4">
                        {coreSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-xl border border-muted/60 bg-card text-card-foreground shadow-xs transition-all hover:shadow-md hover:border-primary/20"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        {skill.icon}
                                    </div>
                                    <h3 className="font-semibold text-foreground text-base">
                                        {skill.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-normal">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}