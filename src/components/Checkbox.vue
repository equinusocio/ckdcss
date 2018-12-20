<template>
  <div>
    <input type="checkbox" :data-ckd="animation" :id="animation">
    <label :for="animation" class="Label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    animation: {
      type: String,
      default: "splash",
      required: true
    }
  },
  head() {
    return {
      title: {
        inner: 'It will be a pleasure'
      },
      link: [
        { rel: "stylesheet", type:"text/css", href:`https://unpkg.com/ckd-css` }
      ]
    }
  },
  mounted() {
    console.log(this.animation)
  }
}
</script>

<style lang="postcss" scoped>
.Label {
  text-transform: capitalize;
}
</style>


