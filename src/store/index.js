import { reactive } from "vue";

export const store = reactive({
  apiMovieUri: "https://api.themoviedb.org/3/search/movie",
  apiSeriesUri: "https://api.themoviedb.org/3/search/tv",
  querySearch: "avengers",
  apiKey: "f5f7651010a56a49f338d8ba37dd5a61",
});
