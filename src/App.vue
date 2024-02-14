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
    searchMovies() {
      axios
        .get(
          `${store.apiMovieUri}?query=${store.querySearch}&api_key=${store.apiKey}`
        )
        .then((res) => {
          console.log(
            `${store.apiMovieUri}${store.querySearch}${store.apiKey}`
          );
          this.movieArray = res.data.results;
        });
      axios
        .get(
          `${store.apiSeriesUri}?query=${store.querySearch}&api_key=${store.apiKey}`
        )
        .then((res) => {
          console.log(
            `${store.apiSeriesUri}${store.querySearch}${store.apiKey}`
          );
          this.serieArray = res.data.results;
        });
    },
  },
};
</script>

<template>
  <AppHeader @search-movie="searchMovies"></AppHeader>
  <AppMain
    :movieCardsArray="movieArray"
    :seriesCardsArray="serieArray"
  ></AppMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
