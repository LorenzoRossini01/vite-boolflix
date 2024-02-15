<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Film</a></li>
      <li><a href="#">Serie TV</a></li>
      <li><a href="#">Nuove Aggiunte</a></li>
      <li><a href="#">La tua lista</a></li>
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
    }
  }
}
</style>
