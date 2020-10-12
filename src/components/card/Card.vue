<template>
  <div class="card-wrapper">
    <b-card-group deck>
      <b-card
        :header="header"
        :header-tag="headerTag"
        :footer="footer"
        :footer-tag="footerTag"
        :title="title"
      >
        <b-card-text>
          <slot name="card-body"></slot>
        </b-card-text>
        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: {
      type: String,
      default: "Header"
    },
    headerTag: {
      type: String,
      default: "header"
    },
    footer: {
      type: String,
      default: "Footer"
    },
    footerTag: {
      type: String,
      default: "footer"
    },
    title: {
      type: String,
      default: "My Title"
    }
  }
};
</script>

<style scoped lang="scss">
.card-wrapper {
  margin: 1rem;
}
</style>
