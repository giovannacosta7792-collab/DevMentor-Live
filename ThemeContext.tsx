import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                DevMentor Live
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mentoria técnica com IA para desenvolvedores.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Comunidade</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 DevMentor Live. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para a comunidade de desenvolvedores</p>
        </div>
      </div>
    </footer>
  );
}
