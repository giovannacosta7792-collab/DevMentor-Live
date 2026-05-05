import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            DevMentor Live
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Funcionalidades
          </a>
          <a href="#preview" className="text-foreground hover:text-primary transition-colors">
            Preview
          </a>
          <a href="#cta" className="text-foreground hover:text-primary transition-colors">
            Começar
          </a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Download
        </Button>
      </div>
    </header>
  );
}
