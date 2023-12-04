// Я використовував тут чисто фетч без then щоби інфу з помилок виводити на сторінку, хз чи так правильно)
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjI4NWE4OGY1OTZkYTQ2YmUxYzIwNmU1MjliMWM3OSIsInN1YiI6IjY1NmEyZjgwODgwNTUxMDExZDFjNTYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQtHDmgGve7Wbvt2K5_x8z2Jctow1hsaHZnQSSnG0tc',
  },
};

const getFilms = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
};

export const searchMovie = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
};
export const searchMovieById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
};
export const getCasts = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
};
export const getReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
};
export default getFilms;
