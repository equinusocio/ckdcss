<template>
  <div class="home"><Header /></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    Header: () => import("@/components/Header.vue")
  }
};
</script>
