import { Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";

const roles = [
    {
        title: "System Developer",
        company: "PT Sat Nusapersada Tbk",
        period: "2023 — Present",
        points: [
            "Decoupled Architecture: Engineer a modern backend/frontend (BE/FE) manufacturing platform using Python and React.js to systematically deprecate legacy C# desktop applications while maintaining zero assembly line downtime.",
            "API Architecture: Architect and develop RESTful APIs using C# .NET Core and Python, integrating core Manufacturing Execution Systems (MES) with third-party client applications.",
            "Process Automation: Design and implement C# and Python automation workflows for data integration, reducing manual reporting and processing time by 75%.",
            "Code Quality: Implement automated testing by writing comprehensive unit tests to ensure high code coverage, reliability, minimizing production deployment regressions.",
            "Cloud & DevOps: Containerize monolithic or micro services using Docker and orchestrate deployments via Kubernetes to improve infrastructure reliability and scalability.",
        ],
        stack: ["C# .NET", "Python", "React.js", "Docker", "Kubernetes"],
    },
    {
        title: "Junior Developer",
        company: "PT Sat Nusapersada Tbk",
        period: "2019 — 2022",
        points: [
            "Desktop Application Support: Maintained and engineered new features for a legacy C#-based desktop manufacturing system, extending its lifecycle and stability.",
            "Database & Query Optimization: Wrote and optimized complex SQL queries and stored procedures in SQL Server to retrieve critical manufacturing data for cross-functional teams and user requests.",
            "Technical Support & Troubleshooting: Provided tier-2 technical support, rapidly diagnosing and resolving software issues to minimize downtime in production environments.",
        ],
        stack: ["C#", "SQL Server"],
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
                            <ul className="space-y-1.5 max-w-2xl">
                                {role.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                                    >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 pt-1">
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
