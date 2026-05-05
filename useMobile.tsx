import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Geometric background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      {/* Diagonal line divider */}
      <div className="absolute top-1/3 right-0 w-1 h-64 bg-gradient-to-b from-primary to-transparent -z-5" />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Mentoria Técnica
              <br />
              <span className="text-primary">com IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Videochamadas em tempo real com análise automática de código. Conecte-se com mentores, compartilhe seu código e receba feedback instantâneo alimentado por inteligência artificial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Começar Agora <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-border hover:bg-secondary"
            >
              <Play className="w-4 h-4" /> Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Desenvolvedores</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">1000+</p>
              <p className="text-sm text-muted-foreground">Mentorias</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>

        {/* Right visual element */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border overflow-hidden">
            {/* Simulated code editor */}
            <div className="absolute inset-0 p-6 space-y-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2 font-mono text-xs text-muted-foreground">
                <p><span className="text-primary">function</span> analyzeCode() {'{}'}</p>
                <p className="ml-4"><span className="text-accent">const</span> result = <span className="text-primary">await</span> ai.analyze(code)</p>
                <p className="ml-4"><span className="text-accent">return</span> result</p>
                <p>{'}'}</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute bottom-8 right-8 bg-white border border-border rounded-lg p-4 shadow-lg w-48">
                <p className="text-xs font-semibold text-foreground mb-2">Análise em Tempo Real</p>
                <p className="text-xs text-muted-foreground">Receba sugestões instantâneas enquanto escreve código</p>
              </div>
            </div>
          </div>

          {/* Geometric accent */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-lg" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-accent/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
