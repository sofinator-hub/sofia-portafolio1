interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function ServiceCard({
  title,
  price,
  description,
  features,
  popular,
}: ServiceCardProps) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-3xl
        transition-all duration-500

        backdrop-blur-xl

        ${
          popular
            ? `
              border border-cyan-400/20
              bg-gradient-to-b
              from-cyan-500/[0.08]
              via-white/[0.03]
              to-transparent

              shadow-[0_0_60px_rgba(56,189,248,0.12)]

              lg:scale-105
            `
            : `
              border border-white/10
              bg-white/[0.02]

              hover:border-cyan-400/10
              hover:bg-white/[0.04]
            `
        }

        hover:-translate-y-2
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          opacity-0
          transition-opacity duration-500

          group-hover:opacity-100
          bg-gradient-to-b
          from-cyan-500/[0.05]
          via-transparent
          to-transparent
        "
      />

      {/* Badge */}
      {popular && (
        <div
          className="
            absolute right-5 top-5

            rounded-full

            border border-cyan-400/20
            bg-cyan-500/10

            px-4 py-2

            text-xs
            font-medium
            text-cyan-300
          "
        >
          Más solicitado
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Título */}
        <h3 className="text-3xl font-bold tracking-tight">
          {title}
        </h3>

        {/* Precio */}
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Desde
          </p>

          <div className="mt-3 flex items-end gap-2">
            <span
              className="
                text-5xl
                md:text-6xl
                font-black
                tracking-tight
              "
            >
              {price.replace("Desde ", "").replace(" MXN", "")}
            </span>

            <span className="pb-2 text-white/50">
              MXN
            </span>
          </div>
        </div>

        {/* Texto */}
        <p
          className="
            mt-6
            leading-relaxed
            text-white/65
          "
        >
          {description}
        </p>

        {/* Divider */}
        <div
          className="
            my-8 h-px

            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="
                flex items-center gap-3
                text-white/80
              "
            >
              <div
                className="
                  flex h-7 w-7 items-center justify-center

                  rounded-full

                  border border-cyan-400/15
                  bg-cyan-500/10

                  text-cyan-300
                "
              >
                ✓
              </div>

              {feature}
            </li>
          ))}
        </ul>

        {/* Botones */}
        <div className="mt-10 flex gap-3">
          <a
            href="#contact"
            className="
              flex-1
              rounded-xl

              bg-cyan-500/10
              border border-cyan-400/20

              py-4
              text-center
              font-medium

              transition-all

              hover:bg-cyan-400
              hover:text-black
            "
          >
            Cotizar
          </a>

          <a
            href="https://wa.me/52TU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-xl

              border border-white/10
              bg-white/[0.03]

              py-4
              text-center

              transition-all

              hover:bg-white/10
            "
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}