import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from '../MovieCard';
import type { Movie } from '../../services/movie';


interface MovieRowProps {
  title: string;
  movies: Movie[];
}

/**
 * Komponen MovieRow menampilkan deretan kartu film secara horizontal dengan judul kategori.
 * Menyediakan tombol navigasi kiri dan kanan untuk menggulir daftar film secara mulus.
 *
 * @param {MovieRowProps} props - Properti komponen.
 * @param {string} props.title - Judul kategori atau baris film.
 * @param {Movie[]} props.movies - Array objek film yang akan ditampilkan.
 *
 * @returns {JSX.Element | null} Elemen JSX yang menampilkan baris film, atau null jika daftar film kosong.
 */
export default function MovieRow({ title, movies }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  if (!movies.length) return null;

  return (
    <div className="space-y-2 px-4 mt-4">
      <h2 className="text-xl font-semibold z-50">{title}</h2>
      
      <div className="group relative">
        <button
          className="absolute left-0 top-0 bottom-0 z-40 hidden group-hover:block bg-black/50 px-2"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth no-scrollbar"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              width="w-[200px] flex-shrink-0"
            />
          ))}
        </div>

        <button
          className="absolute right-0 top-0 bottom-0 z-40 hidden group-hover:block bg-black/50 px-2"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}