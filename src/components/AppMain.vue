<script>
import AppMovieCards from "./AppMovieCards.vue";
import AppSeriesCards from "./AppSeriesCards.vue";

export default {
  data() {
    return {};
  },

  props: {
    movieCardsArray: Array,
    seriesCardsArray: Array,
  },

  components: {
    AppMovieCards,
    AppSeriesCards,
  },
};
</script>

<template>
  <div class="container-fluid">
    <h1>Movies</h1>
    <div class="row g-2">
      <div class="col" v-for="movie in movieCardsArray">
        <AppMovieCards :movieCard="movie"></AppMovieCards>
      </div>
    </div>
    <h1>TV Series</h1>
    <div class="row g-2">
      <div class="col" v-for="serie in seriesCardsArray">
        <AppSeriesCards :serieCard="serie"></AppSeriesCards>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  overflow: hidden;
  margin-left: 200px;
}
.row {
  overflow-x: auto;
  flex-wrap: nowrap;
  .col {
    flex-grow: 0;
  }
}
</style>
