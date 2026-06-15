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
    <div
      className={`
        group relative overflow-hidden rounded-[32px]
        border transition-all duration-500

        ${
          popular
            ? `
            border-white/20
            bg-white/[0.05]
            scale-105
            shadow-[0_0_80px_rgba(255,255,255,0.08)]
            `
            : `
            border-white/10
            bg-white/[0.02]
            hover:bg-white/[0.04]
            `
        }

        backdrop-blur-xl
        hover:-translate-y-2
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-gradient-to-b
          from-white/[0.05]
          via-transparent
          to-transparent
        "
      />

      {/* Popular badge */}
      {popular && (
        <div
          className="
            absolute right-5 top-5
            rounded-full
            border border-white/20
            bg-white/10
            px-4 py-2
            text-xs font-medium
            backdrop-blur
          "
        >
          Más solicitado
        </div>
      )}

      <div className="relative z-10 p-8">
        {/* Title */}
        <h3 className="text-3xl font-bold tracking-tight">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-8">
          <span className="block text-sm uppercase tracking-[0.3em] text-white/50">
            Desde
          </span>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-6xl font-black tracking-tight">
              {price.replace("Desde ", "").replace(" MXN", "")}
            </span>

            <span className="mb-2 text-lg text-white/60">
              MXN
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 leading-relaxed text-white/70">
          {description}
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Features */}
        <ul className="space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-white/85"
            >
              <div
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/5 text-sm
                "
              >
                ✓
              </div>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="
            mt-10 w-full rounded-2xl
            border border-white/15
            bg-white/5
            py-4
            font-medium
            transition-all duration-300

            hover:bg-white
            hover:text-black
          "
        >
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}