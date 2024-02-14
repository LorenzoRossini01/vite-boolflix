<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";

export default {
  data() {
    return {
      movieArray: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=Spiderman&api_key=f5f7651010a56a49f338d8ba37dd5a61`
      )
      .then((res) => {
        console.log(res.data.results);
        this.movieArray = res.data.results;
      });
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain :movieCardsArray="movieArray"></AppMain>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
