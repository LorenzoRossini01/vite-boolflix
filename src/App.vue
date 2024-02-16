<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store/index";

export default {
  data() {
    return {
      store,
      movieArray: [],
      serieArray: [],
    };
  },

  components: {
    AppHeader,

    AppMain,
  },

  methods: {
    fetchMovies() {
      axios
        .get(
          `${store.apiMovieUri}?query=${store.searchBar.querySearch}&api_key=${store.apiKey}`
        )
        .then((res) => {
          console.log(
            `${store.apiMovieUri}${store.searchBar.querySearch}${store.apiKey}`
          );
          this.movieArray = res.data.results;
        });
    },

    fetchMoviesGenres() {
      axios
        .get(`${store.apiMovieGenreUri}&api_key=${store.apiKey}`)
        .then((res) => {
          console.log(res.data.genres);
          store.movieGenres = res.data.genres;
        });
    },

    fetchSeries() {
      axios
        .get(
          `${store.apiSeriesUri}?query=${store.searchBar.querySearch}&api_key=${store.apiKey}`
        )
        .then((res) => {
          console.log(
            `${store.apiSeriesUri}${store.searchBar.querySearch}${store.apiKey}`
          );
          this.serieArray = res.data.results;
        });
    },

    fetchSeriesGenres() {
      axios
        .get(`${store.apiSerieGenreUri}&api_key=${store.apiKey}`)
        .then((res) => {
          console.log(res.data.genres);
          store.serieGenres = res.data.genres;
        });
    },

    searchMovies() {
      this.fetchMovies();
      this.fetchMoviesGenres();
      this.fetchSeries();
      this.fetchSeriesGenres();
    },
  },
};
</script>

<template>
  <AppHeader @search="searchMovies"></AppHeader>
  <AppMain
    :movieCardsArray="movieArray"
    :seriesCardsArray="serieArray"
  ></AppMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
