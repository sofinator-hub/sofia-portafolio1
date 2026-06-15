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
  popular = false,
}: ServiceCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 backdrop-blur-xl hover:-translate-y-2 ${
        popular
          ? "border-cyan-400/20 bg-cyan-500/[0.04] shadow-[0_0_40px_rgba(56,189,248,0.08)] lg:scale-[1.02]"
          : "border-white/10 bg-white/[0.02] hover:border-cyan-400/10 hover:bg-white/[0.04]"
      }`}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0 
          opacity-0
          transition-opacity
          duration-500 
          group-hover:opacity-100 
          bg-gradient-to-b
          from-cyan-500/[0.03]
          via-transparent
          to-transparent
        "
      />

      {/* Badge */} 
      {popular && (
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full 
            border
            border-cyan-400/20 
            bg-cyan-500/10
            px-3
            py-1.5 
            text-xs
            font-medium 
            text-cyan-300
          "
        >
          Más solicitado
        </div>
      )}

      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h3>

        <div className="mt-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
            Desde
          </span>

          <div className="mt-2">
            <div className="text-5xl font-black leading-none md:text-6xl">
              {price}
            </div>

            {price !== "Cotizar" && (
              <span className="mt-1 block text-sm text-white/50">
                MXN
              </span>
            )}
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/65">
          {description}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <ul className="space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-white/80"
            >
              <div
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center 
                  rounded-full 
                  border
                  border-cyan-400/15 
                  bg-cyan-500/10
                  text-xs
                  text-cyan-300
                "
              >
                ✓
              </div>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-2">
          <a
            href="#contact"
            className=" 
              flex-1
              rounded-xl 
              border
              border-cyan-400/20 
              bg-cyan-500/10
              py-3
              text-center
              text-sm
              font-medium 
              transition-all
              hover:bg-cyan-400 
              hover:text-black
            "
          >
            Solicitar propuesta
          </a>

          <a
            href="https://wa.me/525528287764"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 
              rounded-xl
              border 
              border-white/10
              bg-white/[0.03] 
              py-3
              text-center
              text-sm
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