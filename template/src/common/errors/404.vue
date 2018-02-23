<template>
  <div class="lost-wrapper">
    <h1>4 0 4</h1>
    <p>如果你来到这里，说明页面已经丢失！</p>
    <p style="margin-top: 20px">
      <button @click="goBack">返回上一页</button>
      <button @click="goHome">返回首页</button>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'lost',
    methods: {
      goHome() {
        this.$router.push({name: 'indexHome'})
      },
      goBack() {
        this.$router.back()
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .lost-wrapper {
    margin-top: 100px;
    text-align: center;
  }
</style>
