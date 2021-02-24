<template>
  <div class="home-page">
    <div class="a">
      <div class="route" @click="route">跳转</div>
    </div>
  </div>
</template>
<script >
  export default {
    methods:{
      route(){
        this.$router.push({
         path:'/commin'
        })
      }
    }
}
</script>
<style>
.home-page{
  width: 100%;
  height: 100%;
}
.a{
  height: 100px;
  background: red;
}
</style>




