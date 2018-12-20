<template>
  <div>
    <Header class="Header" />
    <Navigator />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header,
    Navigator: () => import("@/components/Navigator.vue")
  }
};
</script>

<style lang="postcss" scoped>
.Header {
  margin-bottom: 160px;
}
</style>
