"use client";

import { PROJECTS, FEATURED_PROJECTS } from "@/constants/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

/**
 * Componente Projects
 * Exibe portfólio de projetos realizados
 */
export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-24 bg-gradient-to-br from-background via-muted to-background"
      aria-labelledby="projetos-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2
            id="projetos-heading"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Projetos Realizados
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Conheça alguns dos nossos principais trabalhos e a qualidade das soluções que entregamos
          </p>
        </div>

        {/* Projetos em Destaque */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Destaques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={true}
              />
            ))}
          </div>
        </div>

        {/* Todos os Projetos */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Todos os Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.featured}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6">
            Quer conhecer mais sobre algum dos nossos projetos?
          </p>
          <a
            href="#contato"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}