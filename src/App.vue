<template>
  <Header />

  <HomePage />
</template>

<script>
import HomePage from "./pages/homePage/index";
import Header from "./components/header";

import './style/index.scss';
export default {
  name: "App",
  components: {
    HomePage,
    Header,
  },
};
</script>

<style lang='scss'>
</style>
