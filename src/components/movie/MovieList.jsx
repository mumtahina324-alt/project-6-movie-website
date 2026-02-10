import { getAllMovies } from "../../data/movie";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const movies = getAllMovies();
  console.log(movies);
  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
