<template>
  <section class="Navigator">
    <Carousel>
      <Slide
        v-for="animation in animations"
        :key="animation"
        :perPage="1"
        :mouse-drag="false"
        class="Slide"
      >
        <Checkbox :animation="animation"> {{ animation }} </Checkbox>
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import Animations from "@/assets/animations.json";
import Checkbox from "@/components/Checkbox.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "navigator",
  data() {
    return {
      animations: Animations
    };
  },
  components: {
    Checkbox,
    Carousel,
    Slide
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

.Slide {
  background-color: red;
  width: 200px;
}
</style>
