<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  props: {
    movieCard: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ movieCard.title }}</h3>
      <img :src="`${store.introImgApi}${movieCard.poster_path}`" alt="" />
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
          <li>{{ movieCard.vote_average }}</li>
          <li v-if="movieCard.adult">+18</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
