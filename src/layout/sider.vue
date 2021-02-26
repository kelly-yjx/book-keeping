<template>
  <div class="sider">
    <a-layout-sider class="sider" width="200" theme="dark">
      <a-menu mode="inline" theme="dark" @click="goRouter"  v-model:selectedKeys="selectedKeys">
        <div v-for="item in routers" v-bind:key="item.path">
          <a-sub-menu v-if="item.children">
            <template #title>
              <span>
                <span>{{ item.meta.title }}</span>
              </span>
            </template>
            <div v-for="(item1, index) in item.children" :key="index">
              <a-menu-item v-if="item1.path != ''" >
                <router-link :to="resolve(item.path, item1.path)">{{
                  item.meta.title
                }}</router-link>
              </a-menu-item>
            </div>
          </a-sub-menu>
          <a-menu-item v-else >
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
    };
  },
  created() {
    let router = this.$router.options.routes;
    this.routers = router;
  },
  methods: {
    goRouter(e) {
      console.log(e);
      // this.$router.push({
      //   path
      // })
    },
    resolve(p, t) {
      if (p == "/") return `/${t}`;
      else return `${p}/${t}`;
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