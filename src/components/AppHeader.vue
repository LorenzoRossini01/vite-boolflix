<script>
import { store } from "../store/index";
import AppNav from "./AppNav.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppNav,
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
  <header>
    <div class="container-fluid">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
          alt=""
        />
        <AppNav></AppNav>
      </div>

      <div class="input-group">
        <input
          type="text"
          v-model="store.searchBar.querySearch"
          @keyup.enter="$emit('search-movie')"
          v-show="store.searchBar.show"
          class="form-control outline-secondary bg-dark text-white"
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
  height: 75px;
  padding: 3rem 0;

  .container-fluid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    div {
      display: flex;
      align-items: center;
      height: 75px;
    }

    img {
      height: 90%;
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
