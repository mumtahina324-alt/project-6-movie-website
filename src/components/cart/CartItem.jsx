import { Trash2 } from "lucide-react";
import { getMovieUrl } from "../../Utils/Movie-Utils";

export default function CartItem({ movie, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-black/10 dark:border-white/10 last:border-b-0">
      {/* Left: Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={getMovieUrl(movie.image)}
          alt={movie.title}
          className="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-sm md:text-base">{movie.title}</h3>

          <p className="text-xs text-gray-500 mt-0.5">{movie.genre}</p>

          <span className="text-sm font-medium text-primary">
            ${movie.price}
          </span>
        </div>
      </div>

      {/* Right: Remove Button */}
      <button
        onClick={() => onRemove(movie.id)}
        className="flex items-center gap-1 text-sm text-white bg-primary px-4 py-2 rounded-md hover:text-red-600 transition"
      >
        <Trash2 size={16} />
        Remove
      </button>
    </div>
  );
}
