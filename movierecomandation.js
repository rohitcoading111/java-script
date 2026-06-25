const movies = [
  { name: "Interstellar", rating: 9 },
  { name: "Avatar", rating: 7 },
  { name: "Inception", rating: 8 }
];

function getRecommendedMovies(movies) {
  return movies.filter(movie => movie.rating >= 8);
}

console.log(getRecommendedMovies(movies));