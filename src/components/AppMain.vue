<script>
import AppCard from "./AppCard.vue";

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
    AppCard,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div v-if="movieCardsArray.length > 0">
      <h2>Movies</h2>
      <div class="row g-1">
        <div class="col" v-for="movie in movieCardsArray">
          <AppCard :content="movie"></AppCard>
        </div>
      </div>
    </div>
    <div v-if="seriesCardsArray.length > 0">
      <h2>TV Series</h2>
      <div class="row g-1">
        <div class="col" v-for="serie in seriesCardsArray">
          <AppCard :content="serie"></AppCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  overflow: hidden;
  h2 {
    font-size: 2rem;
    color: white;
    margin: 1rem 0;
  }
}
.row {
  overflow-x: auto;
  flex-wrap: nowrap;
  .col {
    flex-grow: 0;
  }
}
</style>
