const getMovieUrl = (imageName) => {
  return new URL(`../assets/movie-listname/${imageName}`, import.meta.url).href;
};

export { getMovieUrl };
