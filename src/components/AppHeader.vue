<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  emits: ["search-movie"],

  methods: {
    toggleSearchBar() {
      store.searchBar.show = !store.searchBar.show;
    },
  },
};
</script>

<template>
  <header class="bg-dark">
    <div class="container-fluid">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
          alt=""
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          v-model="store.searchBar.querySearch"
          @keyup.enter="$emit('search-movie')"
          v-show="store.searchBar.show"
          class="form-control"
        />
        <div class="btn" @click="toggleSearchBar()">
          <i class="fa-solid fa-search text-white"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;

  .container-fluid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    img {
      width: 150px;
    }

    .input-group {
      width: 400px;
      justify-content: end;

      .btn {
      }
    }
  }
}
</style>
