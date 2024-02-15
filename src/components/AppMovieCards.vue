<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  props: {
    movieCard: Object,
  },

  computed: {
    voteConverted() {
      return Math.round(this.movieCard.vote_average / 2);
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ movieCard.title }}</h3>
      <img :src="`${store.introImgApi}${movieCard.poster_path}`" alt="" />
      <div class="img-default" v-if="movieCard.poster_path == null">
        <img src="https://picsum.photos/seed/8/342/507" alt="" />
        <i class="fa-solid fa-ban fa-6x text-danger"></i>
      </div>
    </div>
    <div class="card-body">
      <div>
        <ul>
          <li>{{ movieCard.original_title }}</li>
          <li class="movie-details">{{ movieCard.overview }}</li>
          <li>
            <img
              :src="`https://flagsapi.com/${store.convertLang(
                movieCard.original_language
              )}/flat/64.png`"
            />
          </li>
          <li>{{ movieCard.release_date }}</li>
          <li>
            <i
              class="fa-solid fa-star"
              :class="voteConverted >= 1 ? 'active' : ''"
            ></i>
            <i
              class="fa-solid fa-star"
              :class="voteConverted >= 2 ? 'active' : ''"
            ></i>
            <i
              class="fa-solid fa-star"
              :class="voteConverted >= 3 ? 'active' : ''"
            ></i>
            <i
              class="fa-solid fa-star"
              :class="voteConverted >= 4 ? 'active' : ''"
            ></i>
            <i
              class="fa-solid fa-star"
              :class="voteConverted == 5 ? 'active' : ''"
            ></i>
          </li>
          <li v-if="movieCard.adult">+18</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
