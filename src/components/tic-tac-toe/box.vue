<template>
  <button
    :data-box-name="boxName"
    @click.prevent="handleClick"
    :disabled="disabled"
    :class="`box-button ${isWinningSetBox ? 'winning-box' : ''} `"
  >{{ boxSignValue }}</button>
</template>

<script>
export default {
  name: "Box",
  props: {
    boxName: String,
    boxSignValue: String,
    disabled: Boolean,
    isWinningSetBox: Boolean
  },
  methods: {
    handleClick(event) {
      // alert("helo");
      // debugger;

      this.$emit("clicked", event.target.dataset.boxName);
    }
  }
};
</script>

<style lang="scss" scoped>
.box-button {
  height: 60px;
  width: 60px;
  border-radius: 5px;
  background: white;
  border: 1px solid grey;

  vertical-align: middle;

  &.winning-box {
    background: #5cb85c;
    color: white;
  }
}
</style>
