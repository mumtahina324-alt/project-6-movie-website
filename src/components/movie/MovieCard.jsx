import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { MovieContext } from "../../Context";
import { getMovieUrl } from "../../Utils/Movie-Utils";
import MovieDetailsModal from "./MovieDetailsModal";
import MovieRating from "./MovieRating";

export default function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartData, setCartData } = useContext(MovieContext);

  // Open modal
  const handleMovieSelect = () => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  // Add to cart
  const addToCart = (e, movie) => {
    e.stopPropagation();

    const isMovieExists = cartData.find((item) => item.id === movie.id);

    if (isMovieExists) {
      toast.error("Movie already exists in cart");
      return;
    }

    setCartData([...cartData, movie]);
    toast.success("Movie added to cart");
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onAddToCart={addToCart}
        />
      )}

      {/* Movie Card */}
      <figure
        onClick={handleMovieSelect}
        className="cursor-pointer p-3 border border-black/10 dark:border-white/10 shadow-sm rounded-xl hover:shadow-lg transition"
      >
        <img
          src={getMovieUrl(movie.image)}
          alt={movie.title}
          className="w-full h-90 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />

        {/* Movie Details */}
        <figcaption className="mt-4 p-1">
          <h3 className="text-lg font-semibold">{movie.title}</h3>

          <p className="text-sm text-gray-500 mt-1">{movie.genre}</p>

          <div className="flex items-center mt-2">
            <MovieRating value={movie.rating} />
            <span className="ml-2 text-sm text-gray-600">({movie.rating})</span>
          </div>

          <p className="mt-2 text-primary font-bold">${movie.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => addToCart(e, movie)}
            className="mt-3 w-full text-[14px] font-semibold bg-primary text-white flex items-center justify-center py-3 px-4 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
        </figcaption>
      </figure>
    </>
  );
}
