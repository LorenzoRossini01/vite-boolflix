<script>
import { store } from "../store/index";

export default {
  data() {
    return { store, cardDetails: false };
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
  <div
    class="card"
    @mouseover="cardDetails = true"
    @mouseleave="cardDetails = false"
  >
    <div class="card-cover" v-if="!cardDetails">
      <img :src="`${store.introImgApi}${movieCard.poster_path}`" alt="" />
      <div class="img-default" v-if="movieCard.poster_path == null">
        <img src="https://picsum.photos/seed/8/342/507" alt="" />
        <i class="fa-solid fa-spanan fa-6x text-danger"></i>
      </div>
    </div>
    <div class="card-details" v-if="cardDetails">
      <div>
        <h3><span>Titolo:</span> {{ movieCard.title }}</h3>
        <ul>
          <li><span>Titolo originale:</span>{{ movieCard.original_title }}</li>
          <li class="movie-details">
            <span>Trama:</span> {{ movieCard.overview }}
          </li>
          <li>
            <span>Lingua:</span>
            <img
              :src="`https://flagsapi.com/${store.convertLang(
                movieCard.original_language
              )}/flat/64.png`"
            />
          </li>
          <li><span>Data di uscita:</span> {{ movieCard.release_date }}</li>
          <li>
            <span>Valutazione:</span>
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
