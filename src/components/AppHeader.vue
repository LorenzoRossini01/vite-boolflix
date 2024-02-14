<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  emits: ["search-movie"],
};
</script>

<template>
  <input type="text" v-model="store.querySearch" />
  <div class="btn btn-primary" @click="$emit('search-movie')">Search</div>
</template>

<style lang="scss" scoped></style>
