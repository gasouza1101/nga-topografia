/**
 * ProjectCard Component
 * Componente para exibir projeto individual
 */

import { Card } from "@/components/ui";
import { Badge } from "@/components/ui";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const categoryLabels: Record<string, string> = {
  topografia: "Topografia",
  georreferenciamento: "Georreferenciamento",
  regularizacao: "Regularização",
  projetos: "Projetos",
};

const categoryColors: Record<string, "success" | "warning" | "error" | "primary" | "secondary" | "accent"> = {
  topografia: "success",
  georreferenciamento: "secondary",
  regularizacao: "warning",
  projetos: "primary",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden !p-0 hover:shadow-2xl transition-all duration-300 ${featured ? "border-2 border-green-500" : ""}`}>
      {/* Imagem Placeholder */}
      <div className="w-full h-56 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-800/80" />
        <div className="relative text-white text-center">
          <div className="text-4xl mb-2">📐</div>
          <p className="text-sm opacity-90">Projeto: {project.title}</p>
        </div>
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            Destaque
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-lg font-bold text-gray-900 flex-1">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta informações */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={categoryColors[project.category] || "default"}
              size="sm"
            >
              {categoryLabels[project.category] || project.category}
            </Badge>
          </div>
          <span className="text-xs text-gray-500 font-medium">{project.date}</span>
        </div>
      </div>
    </Card>
  );
}
