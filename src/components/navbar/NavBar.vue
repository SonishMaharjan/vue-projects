<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">VueProjects</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" id="c-nav-menu">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
}
</style>
      