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
      {{ movieCard.title }}
    </div>
    <div class="card-body">
      <ul>
        <li>{{ movieCard.original_title }}</li>
        <li>{{ movieCard.overview }}</li>
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
</template>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 500px;
}
</style>
