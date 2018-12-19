<template>
  <div class="home"><Header /></div>
</template>

<script>
export default {
  name: "home",
  components: {
    Header: () => import("@/components/Header.vue")
  }
};
</script>
