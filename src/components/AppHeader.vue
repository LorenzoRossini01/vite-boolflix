<script>
export default {
  data() {
    return {
      querySearch: "",
    };
  },
};
</script>

<template>
  <input type="text" v-model="querySearch" />
  <div class="btn btn-primary">Search</div>
</template>

<style lang="scss" scoped></style>
