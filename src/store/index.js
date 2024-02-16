import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  introImgApi: "http://image.tmdb.org/t/p/w342/",
  searchBar: { querySearch: "", show: false },
  apiKey: "f5f7651010a56a49f338d8ba37dd5a61",

  // array film e serie cercate
  apiMovieUri: "https://api.themoviedb.org/3/search/movie",
  apiSeriesUri: "https://api.themoviedb.org/3/search/tv",

  movieArray: [],
  serieArray: [],

  // array generi film e serie
  apiMovieGenreUri: "https://api.themoviedb.org/3/genre/movie/list?",
  apiSerieGenreUri: "https://api.themoviedb.org/3/genre/tv/list?",

  movieGenres: [],
  serieGenres: [],

  // top rated film e serie
  apiRatedMovieUri: "https://api.themoviedb.org/3/movie/top_rated?",
  apiRatedSerieUri: "https://api.themoviedb.org/3/tv/top_rated?",

  topRatedMovies: [],
  topRatedSeries: [],

  // popular film e serie
  apiPopularMovieUri: "https://api.themoviedb.org/3/movie/popular?",
  apiPopularSerieUri: "https://api.themoviedb.org/3/tv/popular?",

  popularMovies: [],
  popularSeries: [],

  // airing today film e serie
  apiTodayMovieUri:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  apiTodaySerieUri:
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&timezone=GMT%2B1",

  todayMovies: [],
  todaySeries: [],

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

  fetchRatedMovies() {
    axios.get(`${this.apiRatedMovieUri}&api_key=${this.apiKey}`).then((res) => {
      this.topRatedMovies = res.data.results;
    });
  },
  fetchRatedSeries() {
    axios.get(`${this.apiRatedSerieUri}&api_key=${this.apiKey}`).then((res) => {
      this.topRatedSeries = res.data.results;
    });
  },
  fetchPopularMovies() {
    axios
      .get(`${this.apiPopularMovieUri}&api_key=${this.apiKey}`)
      .then((res) => {
        this.popularMovies = res.data.results;
      });
  },
  fetchPopularSeries() {
    axios
      .get(`${this.apiPopularSerieUri}&api_key=${this.apiKey}`)
      .then((res) => {
        this.popularSeries = res.data.results;
      });
  },
  fetchTodayMovies() {
    axios.get(`${this.apiTodayMovieUri}&api_key=${this.apiKey}`).then((res) => {
      this.todayMovies = res.data.results;
    });
  },
  fetchTodaySeries() {
    axios.get(`${this.apiTodaySerieUri}&api_key=${this.apiKey}`).then((res) => {
      this.todaySeries = res.data.results;
    });
  },

  getMovies() {
    this.topRatedSeries = [];
    this.popularSeries = [];
    this.todayMovies = [];
    this.todaySeries = [];
    this.fetchRatedMovies();
    this.fetchPopularMovies();
  },

  getSeries() {
    this.topRatedMovies = [];
    this.popularMovies = [];
    this.todayMovies = [];
    this.todaySeries = [];
    this.fetchRatedSeries();
    this.fetchPopularSeries();
  },

  getNewContent() {
    this.fetchPopularMovies();
    this.fetchPopularSeries();
    this.fetchTodayMovies();
    this.fetchTodaySeries();
  },
});
