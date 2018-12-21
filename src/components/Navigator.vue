<template>
  <div class="Navigator">
    <Carousel
      class="Carousel"
      easing="cubic-bezier(0.4, 0, 0.2, 1)"
      navigation-next-label="→"
      navigation-prev-label="←"
      :perPage="1"
      :mouse-drag="false"
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigation-click-target-size="16"
    >
      <Slide v-for="animation in animations" :key="animation" class="Slide">
        <label :for="animation" class="Label">
          <input
            type="checkbox"
            :data-ckd="animation"
            tabindex="-1"
            :id="animation"
          />
          {{ animation }}
        </label>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Animations from "@/assets/animations.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "navigator",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      animations: Animations
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: `https://unpkg.com/ckd-css`
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.Navigator {
  display: inline-flex;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  padding: 40px 80px;
}

.Carousel {
  max-width: 160px;
}

.Slide {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.VueCarousel-navigation-button {
  font-size: 32px;
  font-weight: 900;
  border-radius: 0;
  color: var(--accent-color, #3dea6e) !important;
}

.Label {
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1.125rem;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;

  & input[type="checkbox"] {
    margin: 2px 8px 0 0;
  }
}
</style>
