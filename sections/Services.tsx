import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32"
    >
      <div className="container mx-auto px-6">
        {/* Header */}

        <div className="text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/5
              px-4 py-2
              text-xs
              uppercase
              tracking-[0.3em]
              text-cyan-300
            "
          >
            Servicios
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              tracking-tight
              md:text-7xl
            "
          >
            Soluciones digitales
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            Desde landing pages para emprendedores hasta
            soluciones empresariales diseñadas para crecer
            junto a tu negocio.
          </p>
        </div>

        {/* Paquetes */}

        <div
          className="
            mt-24
            grid
            gap-8
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

        {/* Funcionalidades adicionales */}

        <div
          className="
            mt-24
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >
          <div className="text-center">
            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              Funcionalidades adicionales
            </span>

            <h3
              className="
                mt-4
                text-3xl
                font-bold
                md:text-4xl
              "
            >
              Expande tu proyecto
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-white/60
              "
            >
              Agrega herramientas avanzadas según las
              necesidades específicas de tu negocio.
            </p>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {/* Ecommerce */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  Ecommerce / Tienda Online
                </h4>

                <span className="font-medium text-cyan-300">
                  +$10,000 MXN
                </span>
              </div>

              <p className="mt-3 text-sm text-white/60">
                Catálogo de productos, carrito de compra,
                pagos en línea, gestión de pedidos e
                inventario.
              </p>
            </div>

            {/* Reservas */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  Sistema de Reservas
                </h4>

                <span className="font-medium text-cyan-300">
                  Desde $4,000
                </span>
              </div>

              <p className="mt-3 text-sm text-white/60">
                Ideal para clínicas, spas,
                consultorios y restaurantes.
              </p>
            </div>

            {/* Panel Admin */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  Panel Administrativo
                </h4>

                <span className="font-medium text-cyan-300">
                  Desde $6,000
                </span>
              </div>

              <p className="mt-3 text-sm text-white/60">
                Gestión de contenido, usuarios,
                pedidos y estadísticas.
              </p>
            </div>

            {/* SEO */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">
                  SEO Avanzado
                </h4>

                <span className="font-medium text-cyan-300">
                  Desde $3,000
                </span>
              </div>

              <p className="mt-3 text-sm text-white/60">
                Optimización técnica para mejorar
                la visibilidad de tu sitio en Google.
              </p>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-8
                py-4
                font-medium
                transition-all
                hover:bg-cyan-400
                hover:text-black
              "
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}