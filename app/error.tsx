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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 to-green-700 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-bold mb-4">500</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Erro no servidor
        </h2>
        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Desculpe, ocorreu um erro inesperado. Nosso time foi notificado e está
          trabalhando para resolver o problema.
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="bg-red-900/50 p-4 rounded-lg mb-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-mono text-red-200">{error.message}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}
