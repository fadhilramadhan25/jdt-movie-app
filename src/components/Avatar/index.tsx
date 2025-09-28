interface AvatarProps {
  src?: string;           // URL gambar avatar
  initials?: string;      // fallback text/inisial
  size?: string;          // contoh: "w-8 h-8" / "w-12 h-12"
  square?: boolean;       // kalau true -> kotak, default bulat
  className?: string;
}

export function Avatar({
  src,
  initials,
  size = "w-10 h-10",
  square = false,
  className = "",
}: AvatarProps) {
  const shape = square ? "rounded-md" : "rounded-full";

  return (
    <div
      className={`${size} ${shape} overflow-hidden bg-gray-300 flex items-center justify-center text-white font-semibold ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      ) : (
        initials || "?"
      )}
    </div>
  );
}
