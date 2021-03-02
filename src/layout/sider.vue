<template>
  <div class="sider">
    <a-layout-sider class="sider" width="200" theme="dark">
      <a-menu mode="inline" theme="dark" @click="goRouter"  v-model:selectedKeys="selectedKeys">
        <div v-for="item in routers" v-bind:key="item.path">
          <a-sub-menu v-if="item.children&&item.children.length>1">
            <template #title>
              <span>
                <span>{{ item.meta.title }}</span>
              </span>
            </template>
            <div v-for="item1 in item.children" :key="item1.path">
              <a-menu-item  >
                <div >{{item.meta.title}}</div>
              </a-menu-item>
            </div>
          </a-sub-menu>
          <a-menu-item v-else-if="item.path!='/'" >
            <router-link :to="item.path">{{
              item.meta.title
            }}</router-link></a-menu-item
          >
        </div>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routers: [],
      selectedKeys:[]
    };
  },
  created() {
    let router = this.$router.options.routes;
    console.log(router)
    this.routers = router;
  },
  methods: {
    goRouter(e) {
      console.log(e.keyPath);
      let name
      if( e.keyPath.length==2){
        name = (e.keyPath[1]=='/'?'':e.keyPath[1])+'/'+e.keyPath[0]
        console.log(name)
        }else{
        name = e.keyPath[0]
      }
      this.$router.push({
        path:`${name}`
      })
    },
   
  },
};
</script>
<style lang="scss" scoped>
.sider {
  height: 100vh;
  float: left;
}
</style>