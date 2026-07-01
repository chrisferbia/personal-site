import { FolderGit2, ArrowUpRight, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const projects = [
    {
        title: "Project One",
        description:
            "A short, outcome-focused summary: what problem it solved, for whom, and the impact. Replace with a real project.",
        impact: "e.g. Cut page load time by 40%",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Project Two",
        description:
            "Highlight the hardest technical challenge and how you approached it. Keep it to two or three sentences.",
        impact: "e.g. Served 2,000+ daily active users",
        stack: ["C#", ".NET Core", "SQL Server"],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        title: "Project Three",
        description:
            "Lead with the result. Numbers, scale, or a clear before/after make projects memorable to reviewers.",
        impact: "e.g. Processed $1M+ in transactions",
        stack: ["React", "Node.js", "PostgreSQL"],
        liveUrl: "#",
        repoUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-12 space-y-12 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <FolderGit2 className="h-4 w-4" />
                    Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Things I've built.
                </h2>
                <p className="max-w-2xl text-muted-foreground sm:text-lg leading-relaxed">
                    A selection of work I'm proud of. Each one links to a live demo and
                    its source.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col rounded-xl border border-muted/60 bg-card text-card-foreground shadow-xs transition-all hover:shadow-md hover:border-primary/20 overflow-hidden"
                    >
                        {/* Screenshot / preview slot */}
                        <div className="aspect-video bg-muted/40 flex items-center justify-center text-muted-foreground/50">
                            <FolderGit2 className="h-8 w-8" />
                        </div>

                        <div className="flex flex-col flex-1 p-5 space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-foreground text-lg">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-normal">
                                    {project.description}
                                </p>
                            </div>

                            {/* TODO: replace with a real, quantified result */}
                            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                <TrendingUp className="h-4 w-4 text-primary" />
                                {project.impact}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="outline"
                                        className="px-2.5 py-0.5 text-xs font-medium border-muted-foreground/20"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 pt-2 mt-auto">
                                <Button asChild size="sm" className="group">
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        Live Demo
                                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                        <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                            <path d="M9 18c-4.51 2-5-2-7-2" />
                                        </svg>
                                        Code
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
