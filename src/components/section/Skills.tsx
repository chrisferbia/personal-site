import {
    Layout,
    Server,
    Database,
    Wrench,
    Layers,
    ShieldCheck,
    FlaskConical,
} from "lucide-react";
import {
    SiDotnet,
    SiPython,
    SiDjango,
    SiReact,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiTypescript,
    SiTailwindcss,
    SiRabbitmq,
    SiElasticsearch,
    SiGrafana,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

type Skill = {
    name: string;
    description: string;
    // Brand logo from react-icons, or a fallback node when no brand icon exists.
    Icon?: IconType;
    fallback?: ReactNode;
    // Official brand color, revealed on hover.
    brand?: string;
};

type SkillGroup = {
    icon: ReactNode;
    title: string;
    skills: Skill[];
};

const skillGroups: SkillGroup[] = [
    {
        icon: <Server className="h-5 w-5 text-primary" />,
        title: "Backend",
        skills: [
            {
                name: "C# / .NET",
                description: "REST APIs integrating MES with client apps.",
                Icon: SiDotnet,
                brand: "#512BD4",
            },
            {
                name: "ASP.NET Core",
                description: "REST APIs for manufacturing systems (MES).",
                Icon: SiDotnet,
                brand: "#512BD4",
            },
            {
                name: "Python",
                description: "Backend services and automation workflows.",
                Icon: SiPython,
                brand: "#3776AB",
            },
            {
                name: "Django REST Framework",
                description: "Clean, secure REST APIs in Python.",
                Icon: SiDjango,
                brand: "#092E20",
            },
            {
                name: "Authentication / Authorization",
                description: "Secure APIs with JWT and Django token auth.",
                fallback: <ShieldCheck className="h-4 w-4" />,
            },
            {
                name: "RabbitMQ",
                description: "Message queues for decoupled services.",
                Icon: SiRabbitmq,
                brand: "#FF6600",
            },
        ],
    },
    {
        icon: <Layout className="h-5 w-5 text-primary" />,
        title: "Frontend",
        skills: [
            {
                name: "React.js",
                description: "Modern platform frontend replacing legacy apps.",
                Icon: SiReact,
                brand: "#61DAFB",
            },
            {
                name: "Next.js",
                description: "Server-side rendering and routing for React.",
                Icon: SiNextdotjs,
                brand: "#000000",
            },
            {
                name: "TypeScript",
                description: "Typed React and Next.js apps.",
                Icon: SiTypescript,
                brand: "#3178C6",
            },
            {
                name: "Tailwind CSS",
                description: "Utility-first, responsive styling.",
                Icon: SiTailwindcss,
                brand: "#06B6D4",
            },
        ],
    },
    {
        icon: <Database className="h-5 w-5 text-primary" />,
        title: "Databases",
        skills: [
            {
                name: "SQL Server",
                description: "Tuned queries and stored procedures.",
                fallback: <Database className="h-4 w-4" />,
            },
            {
                name: "PostgreSQL",
                description: "Relational modeling and query tuning.",
                Icon: SiPostgresql,
                brand: "#4169E1",
            },
            {
                name: "Redis",
                description: "Caching and session storage.",
                Icon: SiRedis,
                brand: "#FF4438",
            },
        ],
    },
    {
        icon: <Wrench className="h-5 w-5 text-primary" />,
        title: "Tools & Infrastructure",
        skills: [
            {
                name: "Docker",
                description: "Containerize services for reliable deploys.",
                Icon: SiDocker,
                brand: "#2496ED",
            },
            {
                name: "Kubernetes",
                description: "Orchestrate scalable deployments.",
                Icon: SiKubernetes,
                brand: "#326CE5",
            },
            {
                name: "Git",
                description: "Branch-based, PR-driven workflows.",
                Icon: SiGit,
                brand: "#F05032",
            },
            {
                name: "Unit Testing",
                description: "xUnit (.NET) and pytest (Python).",
                fallback: <FlaskConical className="h-4 w-4" />,
            },
            {
                name: "Elasticsearch",
                description: "Query and analyze application logs.",
                Icon: SiElasticsearch,
                brand: "#005571",
            },
            {
                name: "Grafana",
                description: "Build monitoring dashboards from live metrics.",
                Icon: SiGrafana,
                brand: "#F46800",
            },
        ],
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

            <div className="columns-1 gap-4 sm:columns-2">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="mb-4 break-inside-avoid p-5 rounded-xl border border-muted/60 bg-card text-card-foreground shadow-xs transition-all hover:shadow-md hover:border-primary/20"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                                {group.icon}
                            </div>
                            <h3 className="font-semibold text-foreground text-base">
                                {group.title}
                            </h3>
                        </div>
                        <ul className="flex flex-col gap-3">
                            {group.skills.map((skill) => (
                                <li key={skill.name} className="group flex items-start gap-3">
                                    <span
                                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/50 text-muted-foreground transition-colors group-hover:text-[var(--brand)]"
                                        style={
                                            skill.brand
                                                ? ({ "--brand": skill.brand } as React.CSSProperties)
                                                : undefined
                                        }
                                    >
                                        {skill.Icon ? (
                                            <skill.Icon className="h-4 w-4" />
                                        ) : (
                                            skill.fallback
                                        )}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-foreground leading-tight">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-muted-foreground leading-snug">
                                            {skill.description}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
