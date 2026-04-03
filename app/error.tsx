/**
 * Página 500 - Erro do Servidor
 * Página exibida quando ocorre um erro não tratado
 */
"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-accent text-primary-foreground px-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold mb-4">500</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Erro no servidor
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Desculpe, ocorreu um erro inesperado. Nosso time foi notificado e está
          trabalhando para resolver o problema.
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="bg-secondary/30 p-4 rounded-lg mb-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-mono text-primary-foreground/90">{error.message}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background hover:text-foreground transition-colors"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}
