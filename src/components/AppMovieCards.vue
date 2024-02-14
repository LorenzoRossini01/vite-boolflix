<script>
export default {
  data() {
    return {};
  },

  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="card">{{ card.original_title }}</div>
</template>

<style lang="scss" scoped></style>
