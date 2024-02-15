<script>
import { store } from "../store/index";

export default {
  data() {
    return { store, cardDetails: false };
  },

  props: {
    serieCard: Object,
  },

  computed: {
    voteConverted() {
      return Math.round(this.serieCard.vote_average / 2);
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
      <img :src="`${store.introImgApi}${serieCard.poster_path}`" alt="" />
      <div class="img-default" v-if="serieCard.poster_path == null">
        <img src="https://picsum.photos/seed/8/342/507" alt="" />
        <i class="fa-solid fa-spanan fa-6x text-danger"></i>
      </div>
    </div>
    <div class="card-details" v-if="cardDetails">
      <h3><span>Titolo:</span> {{ serieCard.name }}</h3>
      <ul>
        <li><span>Titolo originale:</span>{{ serieCard.original_name }}</li>
        <li class="serie-details">
          <span>Trama:</span> {{ serieCard.overview }}
        </li>
        <li>
          <span>Lingua:</span>
          <img
            :src="`https://flagsapi.com/${store.convertLang(
              serieCard.original_language
            )}/flat/64.png`"
          />
        </li>
        <li><span>Prima trasmissione:</span> {{ serieCard.first_air_date }}</li>
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
        <li v-if="serieCard.adult">+18</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
