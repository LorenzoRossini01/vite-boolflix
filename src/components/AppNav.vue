<script>
export default {
  data() {
    return {
      navLinks: [
        { href: "#", text: "Home", active: false },
        { href: "#", text: "Film", active: false },
        { href: "#", text: "Serie TV", active: false },
        { href: "#", text: "Nuove Aggiunte", active: false },
        { href: "#", text: "La tua Lista", active: false },
      ],
    };
  },

  methods: {
    activeLink(activeLink) {
      activeLink.active = !activeLink.active;
    },
  },
};
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link in navLinks"
        :class="link.active ? 'active' : ''"
        @click="activeLink(link)"
      >
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
    padding: 0;
    margin: 0;
    li {
      padding: 1.5rem 2.5rem;
      cursor: pointer;
      a {
        text-decoration: none;
        color: white;
      }

      &:hover {
        background-color: #474a4d;
      }
      &.active {
        background-color: #474a4d;
      }
    }
  }
}
</style>
