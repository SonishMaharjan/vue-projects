<template>
  <component
    :is="type"
    :href="href"
    @click.prevent="handleClick"
    :class="['icon-button', customClass]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    customClass: {
      type: String
    }
  },

  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-button {
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background: #0275d8;
  color: white;

  &:hover {
    opacity: 0.9;
  }
}
</style>