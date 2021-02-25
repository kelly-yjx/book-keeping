<template>
  <div class="layout">
    <Sider />
    <router-view  :key='key' />
    
  </div>
</template>
<script>
import Sider from './sider'
export default {
  components:{Sider},
  computed:{
    key(){
      return this.$router.path
    }
  },
  created(){
    console.log('加载模板')
  }
}
</script>
<style lang="scss" scoped>

</style>