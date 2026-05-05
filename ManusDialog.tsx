import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-r from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 
              className="text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Baixe o DevMentor Live agora e comece sua jornada de mentoria técnica com suporte de IA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
            >
              <Download className="w-5 h-5" /> Download APK
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary gap-2 px-8"
            >
              Ver Documentação <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">Android 7+</p>
              <p className="text-sm text-muted-foreground">Compatível com a maioria dos dispositivos</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-accent">100% Grátis</p>
              <p className="text-sm text-muted-foreground">Sem custos ocultos ou assinaturas</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-primary">Open Source</p>
              <p className="text-sm text-muted-foreground">Código disponível no GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
