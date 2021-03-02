<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
    console.log(this.$route.path,'page')
  }
};
</script>

<style lang='scss'>
@import './style/index.scss'
</style>
