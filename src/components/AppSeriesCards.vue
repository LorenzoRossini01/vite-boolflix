<script>
import { store } from "../store/index";

export default {
  data() {
    return { store };
  },

  props: {
    serieCard: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ serieCard.name }}</h3>
      <img :src="`${store.introImgApi}${serieCard.poster_path}`" alt="" />
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
        <li>{{ serieCard.vote_average }}</li>
        <li v-if="serieCard.adult">+18</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
