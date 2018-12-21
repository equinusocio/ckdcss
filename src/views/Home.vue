<template>
  <section class="Home">
    <Header class="Header" />
    <Navigator class="Navigator" />
    <a
      href="https://github.com/equinusocio/ckdcss"
      title="Get started"
      target="_blank"
      rel="noopener"
      >Getting Started</a
    >
  </section>
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
.Home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Header {
  margin: calc(60px + 5vh) 0 calc(60px + 5vh);
}

.Navigator {
  margin-bottom: calc(60px + 5vh);
}
</style>
