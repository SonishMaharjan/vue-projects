<template>
  <div class="flex-content-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlexContent"
};
</script>

<style lang="scss" scoped>
.flex-content-wrapper {
  display: flex;
}
</style>
