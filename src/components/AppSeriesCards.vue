<script>
export default {
  data() {
    return {};
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
        <li>{{ serieCard.original_language }}</li>
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
