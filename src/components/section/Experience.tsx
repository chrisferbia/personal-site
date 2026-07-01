import { Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";

const roles = [
    {
        title: "Software Engineer",
        company: "Company Name",
        period: "2023 — Present",
        description:
            "Describe your scope, the systems you own, and a measurable win. Replace with your real role.",
        stack: ["Next.js", "C#", ".NET Core", "SQL Server"],
    },
    {
        title: "Junior Developer",
        company: "Previous Company",
        period: "2021 — 2023",
        description:
            "Focus on growth and shipped features. What did you learn, and what did you deliver?",
        stack: ["React", "Node.js", "PostgreSQL"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-12 space-y-12 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <Briefcase className="h-4 w-4" />
                    Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Where I've worked.
                </h2>
            </div>

            <div className="relative space-y-8 border-l border-muted/60 pl-6 sm:pl-8">
                {roles.map((role) => (
                    <div key={`${role.company}-${role.period}`} className="relative">
                        {/* Timeline node */}
                        <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <h3 className="font-semibold text-foreground text-lg">
                                    {role.title}{" "}
                                    <span className="text-primary">@ {role.company}</span>
                                </h3>
                                <span className="text-sm text-muted-foreground font-medium">
                                    {role.period}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                {role.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {role.stack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="outline"
                                        className="px-2.5 py-0.5 text-xs font-medium border-muted-foreground/20"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
