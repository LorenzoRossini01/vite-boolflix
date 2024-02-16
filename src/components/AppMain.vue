<script>
import AppCard from "./AppCard.vue";
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  // props: {
  //   movieCardsArray: Array,
  //   seriesCardsArray: Array,
  // },

  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container-fluid">
    <!-- searched movies -->
    <div v-if="store.movieArray.length > 0">
      <h2>Movies</h2>
      <div class="row g-1">
        <div class="col" v-for="movie in store.movieArray">
          <AppCard :content="movie"></AppCard>
        </div>
      </div>
    </div>

    <!-- searched series  -->
    <div v-if="store.serieArray.length > 0">
      <h2>TV Series</h2>
      <div class="row g-1">
        <div class="col" v-for="serie in store.serieArray">
          <AppCard :content="serie"></AppCard>
        </div>
      </div>
    </div>

    <!-- top rated movies  -->
    <div
      v-if="
        store.searchBar.querySearch == '' && store.topRatedMovies.length > 0
      "
    >
      <h2>Top Rated Movies</h2>
      <div class="row g-1">
        <div class="col" v-for="movie in store.topRatedMovies">
          <AppCard :content="movie"></AppCard>
        </div>
      </div>
    </div>

    <!-- popular movies  -->
    <div
      v-if="store.searchBar.querySearch == '' && store.popularMovies.length > 0"
    >
      <h2>Popular Movies</h2>
      <div class="row g-1">
        <div class="col" v-for="movie in store.popularMovies">
          <AppCard :content="movie"></AppCard>
        </div>
      </div>
    </div>

    <!-- aired today movies  -->
    <div
      v-if="store.searchBar.querySearch == '' && store.todayMovies.length > 0"
    >
      <h2>In theatres Movies</h2>
      <div class="row g-1">
        <div class="col" v-for="movie in store.todayMovies">
          <AppCard :content="movie"></AppCard>
        </div>
      </div>
    </div>

    <!-- top rated series  -->
    <div
      v-if="
        store.searchBar.querySearch == '' && store.topRatedSeries.length > 0
      "
    >
      <h2>Top rated Series</h2>
      <div class="row g-1">
        <div class="col" v-for="serie in store.topRatedSeries">
          <AppCard :content="serie"></AppCard>
        </div>
      </div>
    </div>

    <!-- popular series  -->
    <div
      v-if="store.searchBar.querySearch == '' && store.popularSeries.length > 0"
    >
      <h2>Popular Series</h2>
      <div class="row g-1">
        <div class="col" v-for="serie in store.popularSeries">
          <AppCard :content="serie"></AppCard>
        </div>
      </div>
    </div>

    <!-- aired today series  -->
    <div
      v-if="store.searchBar.querySearch == '' && store.todaySeries.length > 0"
    >
      <h2>Aired today Series</h2>
      <div class="row g-1">
        <div class="col" v-for="serie in store.todaySeries">
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
