import { Video, Code2, Brain, Users, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Video,
    title: "Videoconferência em Tempo Real",
    description: "Integração com Jitsi Meet para chamadas de alta qualidade com mentores e colegas desenvolvedores.",
    color: "text-primary"
  },
  {
    icon: Code2,
    title: "Compartilhamento de Código",
    description: "Compartilhe seu código diretamente na sessão e receba feedback instantâneo de especialistas.",
    color: "text-accent"
  },
  {
    icon: Brain,
    title: "Análise com IA",
    description: "Inteligência artificial analisa seu código em tempo real, sugerindo melhorias de performance e segurança.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Comunidade de Desenvolvedores",
    description: "Conecte-se com uma comunidade ativa de desenvolvedores em busca de crescimento técnico.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Feedback Estruturado",
    description: "Receba análises detalhadas com sugestões práticas e explicações educacionais.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Suas sessões são privadas e criptografadas. Você controla quem acessa seu código.",
    color: "text-accent"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Funcionalidades Poderosas
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo que você precisa para uma mentoria técnica eficaz e produtiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
