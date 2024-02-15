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
    <div v-if="movieCardsArray.length > 0">
      <h2>Movies</h2>
      <div class="row g-2">
        <div class="col" v-for="movie in movieCardsArray">
          <AppMovieCards :movieCard="movie"></AppMovieCards>
        </div>
      </div>
    </div>
    <div v-if="seriesCardsArray.length > 0">
      <h2>TV Series</h2>
      <div class="row g-2">
        <div class="col" v-for="serie in seriesCardsArray">
          <AppSeriesCards :serieCard="serie"></AppSeriesCards>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  overflow: hidden;
  h2 {
    font-size: 2.5rem;
    text-decoration: underline;
    color: white;
    margin: 1rem 0;
  }
}
.row {
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 1rem;
  .col {
    flex-grow: 0;
  }
}
</style>
