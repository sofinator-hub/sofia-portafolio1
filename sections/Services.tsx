import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="py-32"
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em]">
            Servicios
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Soluciones para cada etapa
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70">
            Desde landing pages para emprendedores hasta
            plataformas empresariales desarrolladas a medida.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}