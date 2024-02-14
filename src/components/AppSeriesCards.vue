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
      {{ serieCard.name }}
    </div>
    <div class="card-body">
      <ul>
        <li>{{ serieCard.original_name }}</li>
        <li>{{ serieCard.overview }}</li>
        <li>
          <img
            :src="`https://flagsapi.com/${store.convertLang(
              serieCard.original_language
            )}/flat/64.png`"
          />
        </li>
        <li>{{ serieCard.release_date }}</li>
        <li>{{ serieCard.vote_average }}</li>
        <li v-if="serieCard.adult">+18</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 500px;
}
</style>
