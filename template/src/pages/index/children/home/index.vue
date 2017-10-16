<template>
  <div class="home-wrapper">
    <hello></hello>
  </div>
</template>
<script>
  import hello from 'components/hello'
  export default {
    name: 'home',
    components: {
      hello
    },
    data() {
      return {
      }
    }
  }
</script>
<style src="./home.pcss" lang="postcss" scoped></style>