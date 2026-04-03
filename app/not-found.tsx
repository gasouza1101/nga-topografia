import Link from "next/link";

/**
 * Página 404 - Não Encontrado
 * Página exibida quando um recurso não é encontrado
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-accent text-primary-foreground px-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Página não encontrada
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            Voltar ao Início
          </Link>
          <Link
            href="#servicos"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-colors"
          >
            Ver Serviços
          </Link>
        </div>
      </div>
    </div>
  );
}
