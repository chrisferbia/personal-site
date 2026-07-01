"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-muted/60 bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="font-semibold tracking-tight text-foreground"
                >
                    Chris Ferbianto
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    {/* TODO: add your resume as /public/resume.pdf */}
                    <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Resume
                        </a>
                    </Button>
                    <Button asChild size="sm" className="hidden sm:inline-flex">
                        <a href="#contact">Get In Touch</a>
                    </Button>

                    {/* Hamburger toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="md:hidden border-t border-muted/60 bg-background/95 backdrop-blur-md"
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        {/* TODO: add your resume as /public/resume.pdf */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            Get In Touch
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
