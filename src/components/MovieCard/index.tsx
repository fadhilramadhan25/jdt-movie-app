import { Link } from 'react-router-dom';
import { getImageUrl } from '../../services/api';
import type { Movie } from '../../services/movie';

interface MovieCardProps {
  movie: Movie;
  width?: string;
}

/**
 * Komponen kartu film yang menampilkan poster, judul, dan tahun rilis film.
 *
 * @param movie - Objek data film yang akan ditampilkan.
 * @param width - (Opsional) Kelas lebar Tailwind CSS untuk kartu, default 'w-[200px]'.
 *
 * Menampilkan gambar poster film, judul, dan tahun rilis dalam sebuah kartu interaktif.
 * Kartu akan memperbesar sedikit saat di-hover, dan menampilkan overlay gradien dengan detail film.
 */
export default function MovieCard({ movie, width = 'w-[200px]' }: MovieCardProps) {
  const releaseYear = movie.release_date 
    ? new Date(movie.release_date).getFullYear().toString()
    : 'N/A';

  return (
    <Link
      to={`/movie/${movie.id}`}
      className={`${width} transition-transform duration-200 hover:scale-105`}
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden">
        <img
          src={getImageUrl(movie.poster_path) ?? undefined}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4">
            <h3 className="text-sm font-semibold line-clamp-2">{movie.title}</h3>
            <p className="text-xs text-gray-300">{releaseYear}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}