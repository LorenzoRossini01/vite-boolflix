<script>
import { store } from "../store/index";

export default {
  data() {
    return { store, cardDetails: false };
  },

  props: {
    content: Object,
  },

  computed: {
    voteConverted() {
      return Math.ceil(this.content.vote_average / 2);
    },
  },

  methods: {},
};
</script>

<template>
  <div
    class="card"
    @mouseover="cardDetails = true"
    @mouseleave="cardDetails = false"
  >
    <div class="card-cover" v-if="!cardDetails">
      <img :src="`${store.introImgApi}${content.poster_path}`" alt="" />
      <div class="img-default" v-if="content.poster_path == null">
        <img src="https://picsum.photos/seed/8/342/507" alt="" />
        <i class="fa-solid fa-spanan fa-6x text-danger"></i>
      </div>
    </div>
    <div class="card-details" v-if="cardDetails">
      <!-- titolo  -->
      <h3 v-if="content.name"><span>Titolo:</span> {{ content.name }}</h3>
      <h3 v-else><span>Titolo:</span> {{ content.title }}</h3>
      <ul>
        <!-- nome originale  -->
        <li>
          <p v-if="content.original_name">
            <span>Titolo originale:</span>{{ content.original_name }}
          </p>
          <p v-else>
            <span>Titolo originale:</span>{{ content.original_title }}
          </p>
        </li>

        <!-- trama  -->
        <li class="serie-details">
          <span>Trama:</span> {{ content.overview }}
        </li>

        <!-- lingua  -->
        <li>
          <span>Lingua:</span>
          <img
            :src="`https://flagsapi.com/${store.convertLang(
              content.original_language
            )}/flat/64.png`"
          />
        </li>

        <!-- genere  -->
        <li>
          <span>Genere: </span>
          {{ content.genre_ids }}
        </li>

        <!-- data uscita -->
        <li>
          <p v-if="content.first_air_date">
            <span>Prima trasmissione:</span> {{ content.first_air_date }}
          </p>
          <p v-else>
            <span>Prima trasmissione:</span> {{ content.release_date }}
          </p>
        </li>

        <!-- valutazione -->
        <li>
          <span>Valutazione:</span>
          <i
            class="fa-solid fa-star"
            v-for="(star, index) in 5"
            :class="voteConverted > index ? 'active' : ''"
          ></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
