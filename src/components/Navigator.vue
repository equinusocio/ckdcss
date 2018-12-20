<template>
  <section class="Navigator">
    <template v-for="animation in animations">
      <Checkbox :animation="animation" :key="animation">
        {{ animation }}
      </Checkbox>
    </template>
  </section>
</template>

<script>
import Animations from "@/assets/animations.json";
import Checkbox from "@/components/Checkbox.vue";

export default {
  name: "navigator",
  data() {
    return {
      animations: Animations
    };
  },
  components: {
    Checkbox
  }
};
</script>

<style lang="postcss" scoped>
.Navigator {
  display: inline-flex;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 40px;
}
</style>
