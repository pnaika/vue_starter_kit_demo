<template>
  <div class="hello">
    <h1>I am Hello Again With ID component {{id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloAgainWithID',
  data() {
    return {
      id: this.$route.params || 'no-id',
    };
  },
};
</script>
<style scoped>
</style>
