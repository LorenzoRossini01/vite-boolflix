<script>
export default {
  data() {
    return {};
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
        <li>{{ movieCard.original_language }}</li>
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
