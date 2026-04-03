import { Mail, Phone, MapPin } from "lucide-react";
import { SOCIAL_LINKS, COMPANY_PHONE, CONTACT_EMAIL } from "@/constants/navigation";

/**
 * Componente Contact
 * Seção de contato com múltiplos canais de comunicação
 */
export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24 bg-gradient-to-b from-secondary to-accent text-primary-foreground"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="contato-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Entre em Contato
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            Estamos prontos para ajudar seu projeto de topografia
          </p>
        </div>

        {/* Contato Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="text-center">
            <div className="inline-block p-3 bg-secondary/40 rounded-full mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Telefone */}
          <div className="text-center">
            <div className="inline-block p-3 bg-secondary/40 rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Telefone</h3>
            <a
              href={`tel:${COMPANY_PHONE.replace(/\D/g, "")}`}
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              {COMPANY_PHONE}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center">
            <div className="inline-block p-3 bg-secondary/40 rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Abrir no WhatsApp
            </a>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors shadow-lg"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-accent/60 text-center text-sm text-primary-foreground/90">
          <p>&copy; 2024 NGA Topografia. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
}