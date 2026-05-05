import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PreviewSection() {
  return (
    <section id="preview" className="py-20 md:py-32 bg-background">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Interface intuitiva e poderosa para mentoria técnica eficiente.
          </p>
        </div>

        <Tabs defaultValue="lobby" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-secondary">
            <TabsTrigger value="lobby">Lobby</TabsTrigger>
            <TabsTrigger value="call">Chamada</TabsTrigger>
            <TabsTrigger value="analysis">Análise</TabsTrigger>
          </TabsList>

          <TabsContent value="lobby" className="mt-8">
            <Card className="p-8 border border-border bg-card">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Tela de Entrada</h3>
                  <p className="text-muted-foreground">Escolha uma sala e comece sua mentoria</p>
                </div>
                <div className="bg-secondary rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome da Sala</label>
                    <div className="bg-input rounded px-4 py-2 text-muted-foreground">
                      Digite o nome da sala...
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground rounded py-2 font-semibold hover:bg-primary/90 transition-colors">
                    Entrar na Sala
                  </button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="call" className="mt-8">
            <Card className="p-8 border border-border bg-card">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Videoconferência</h3>
                  <p className="text-muted-foreground">Conectado com seu mentor em tempo real</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-12 flex items-center justify-center min-h-64 border border-border">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <p className="text-foreground font-semibold">Videochamada Ativa</p>
                    <p className="text-sm text-muted-foreground">Compartilhe seu código e receba feedback em tempo real</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="mt-8">
            <Card className="p-8 border border-border bg-card">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Análise com IA</h3>
                  <p className="text-muted-foreground">Receba análises automáticas do seu código</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-lg p-6 space-y-3">
                    <p className="text-sm font-semibold text-foreground">Seu Código</p>
                    <div className="bg-input rounded p-4 font-mono text-xs text-muted-foreground space-y-1">
                      <p><span className="text-primary">function</span> sum(a, b) {'{'}</p>
                      <p className="ml-4"><span className="text-accent">return</span> a + b</p>
                      <p>{'}'}</p>
                    </div>
                  </div>
                  <div className="bg-secondary rounded-lg p-6 space-y-3">
                    <p className="text-sm font-semibold text-foreground">Análise da IA</p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>✓ Função simples e clara</p>
                      <p>⚠ Considere adicionar validação de entrada</p>
                      <p>💡 Sugestão: Adicione testes unitários</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
