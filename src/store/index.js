import { reactive } from "vue";

export const store = reactive({
  apiMovieUri: "https://api.themoviedb.org/3/search/movie",
  apiSeriesUri: "https://api.themoviedb.org/3/search/tv",
  introImgApi: "http://image.tmdb.org/t/p/w342/",
  searchBar: { querySearch: "", show: false },
  apiKey: "f5f7651010a56a49f338d8ba37dd5a61",

  apiMovieGenreUri: "https://api.themoviedb.org/3/genre/movie/list?",
  apiSerieGenreUri: "https://api.themoviedb.org/3/genre/tv/list?",

  movieGenres: [],
  serieGenres: [],

  convertLang(lang) {
    if (lang == "en" || lang == "eng") {
      lang = "GB";
    } else if (lang == "ja" || lang == "jap") {
      lang = "JP";
    } else if (lang == "ko") {
      lang = "KR";
    } else if (lang == "ur" || "HI") {
      lang = "IN";
    } else if (lang == "zh") {
      lang = "CN";
    } else lang = lang.toUpperCase();
    return lang;
  },
});
