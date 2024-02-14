<script>
import AppMovieCards from "./AppMovieCards.vue";

export default {
  data() {
    return {};
  },

  props: {
    movieCardsArray: Array,
  },

  components: {
    AppMovieCards,
  },
};
</script>

<template>
  <h1>Movie</h1>
  <AppMovieCards v-for="movie in movieCardsArray" :card="movie"></AppMovieCards>
</template>

<style lang="scss" scoped></style>
