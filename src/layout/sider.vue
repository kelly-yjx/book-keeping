<template>
  <div class="sider">
    <a-layout-sider class="sider" width="200" theme="dark">
      <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <MailOutlined />
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.sider {
  height: 100vh;
  float: left;
}
</style>