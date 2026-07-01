import { Layout, Server, Database, Wrench, Layers } from "lucide-react";
import { Badge } from "../ui/badge";

const skillGroups = [
    {
        icon: <Server className="h-5 w-5 text-primary" />,
        title: "Backend",
        skills: ["C# / .NET", "ASP.NET Core", "Python", "Django REST Framework"],
    },
    {
        icon: <Layout className="h-5 w-5 text-primary" />,
        title: "Frontend",
        skills: ["React.js", "Next.js"],
    },
    {
        icon: <Database className="h-5 w-5 text-primary" />,
        title: "Databases",
        skills: ["SQL Server", "PostgreSQL", "Redis"],
    },
    {
        icon: <Wrench className="h-5 w-5 text-primary" />,
        title: "DevOps & Tools",
        skills: ["Docker", "Kubernetes", "Git"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-12 space-y-12 scroll-mt-24">
            <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
                    <Layers className="h-4 w-4" />
                    Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    The tools I build with.
                </h2>
                <p className="max-w-2xl text-muted-foreground sm:text-lg leading-relaxed">
                    A snapshot of the technologies I reach for across the stack, from
                    crafting interfaces to shipping and operating services.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="p-5 rounded-xl border border-muted/60 bg-card text-card-foreground shadow-xs transition-all hover:shadow-md hover:border-primary/20"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                                {group.icon}
                            </div>
                            <h3 className="font-semibold text-foreground text-base">
                                {group.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="px-3 py-1 text-sm font-medium border-muted-foreground/20 hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
