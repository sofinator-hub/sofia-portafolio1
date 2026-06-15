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
    <div className="relative rounded-3xl border border-white/10 p-8 backdrop-blur">
      {popular && (
        <span className="absolute top-4 right-4 text-xs">
          Más solicitado
        </span>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-3xl font-semibold">
        {price}
      </p>

      <p className="mt-4 text-white/70">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature}>
            ✓ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}