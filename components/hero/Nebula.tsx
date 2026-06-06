export default function Nebula() {
  return (
    <>
      <div
        className="
        absolute
        -left-40
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        blur-[140px]
        opacity-30
        "
        style={{
          background:
            "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
        }}
      />

      <div
        className="
        absolute
        right-0
        top-1/3
        h-[400px]
        w-[400px]
        rounded-full
        blur-[120px]
        opacity-20
        "
        style={{
          background:
            "radial-gradient(circle, #2563eb 0%, transparent 70%)",
        }}
      />
    </>
  );
}