<template>
  <div>
    <!-- <TypeNav></TypeNav> -->
    <h1>{{ $route.params.keyword }}</h1>
    <h1>{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyword', 'k'],
};
</script>

<style scoped>

</style>
