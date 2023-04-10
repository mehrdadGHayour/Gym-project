<template>
  <Header/>
  <router-view></router-view>
</template>

<script>
import Header from "./components/section/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
