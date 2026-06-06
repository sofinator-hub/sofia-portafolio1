export default function Particles() {
  return (
    <div className="absolute inset-0">

      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-violet-400
          "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />
      ))}

    </div>
  );
}