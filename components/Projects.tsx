"use client";

import { PROJECTS } from "@/constants/projects";
import { Card } from "@/components/ui";

/**
 * Componente Projects
 * Exibe portfólio de projetos realizados
 */
export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-24 bg-background"
      aria-labelledby="projetos-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="projetos-heading"
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Projetos Realizados
          </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos e resultados
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.id}>
              <div className="flex flex-col h-full">
                {/* Imagem Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-foreground/50 text-sm">Imagem do projeto</span>
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="text-xs text-foreground/60 border-t border-border pt-3">
                  {project.date}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Quer conhecer mais sobre nossos projetos?
          </p>
          <a
            href="#contato"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
