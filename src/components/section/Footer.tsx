const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-muted/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <span className="font-semibold text-foreground">Chris Ferbianto</span>
                    <p className="text-sm text-muted-foreground max-w-sm">
                        Software developer focused on backend systems with C# and Python,
                        building web and desktop applications.
                    </p>
                </div>

                <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center sm:text-left">
                <p className="text-xs text-muted-foreground">
                    &copy; 2026 Chris Ferbianto. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
