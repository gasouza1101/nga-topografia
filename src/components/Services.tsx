"use client";

import { SERVICES } from "@/constants/services";
import { Card } from "@/components/ui";
import * as Icons from "lucide-react";

/**
 * Componente Services
 * Exibe os serviços oferecidos pela empresa
 */
export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-b from-muted to-background"
      aria-labelledby="servicos-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="servicos-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Nossos Serviços
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Oferecemos soluções completas e precisas em topografia para sua empresa
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            // Type-safe icon lookup
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className: string }>;

            return (
              <Card key={service.id}>
                <div className="flex flex-col h-full">
                  {Icon && (
                    <Icon
                      className="w-10 h-10 mb-4 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}