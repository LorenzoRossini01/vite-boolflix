<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
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
  <div class="card">
    <div class="card-header">
      <h3>{{ serieCard.name }}</h3>
      <img :src="`${store.introImgApi}${serieCard.poster_path}`" alt="" />
      <div class="img-default" v-if="movieCard.poster_path == null">
        <img src="https://picsum.photos/seed/8/342/507" alt="" />
        <i class="fa-solid fa-ban fa-6x text-danger"></i>
      </div>
    </div>
    <div class="card-body">
      <ul>
        <li>{{ serieCard.original_name }}</li>
        <li class="serie-details">{{ serieCard.overview }}</li>
        <li>
          <img
            :src="`https://flagsapi.com/${store.convertLang(
              serieCard.original_language
            )}/flat/64.png`"
          />
        </li>
        <li>{{ serieCard.first_air_date }}</li>
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
        <li v-if="serieCard.adult">+18</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
