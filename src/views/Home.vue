<template>
  <div>
    <b-row>
      <b-col lg="4" md="6" sm="12">
        <!-- footer and title set empty -->
        <Card header="Tic Tac Toe" headerTag="h4" title footer>
          <template v-slot:card-body>
            <p>A simple Tic Tac Toe game with three playing modes:</p>
            <ul>
              <li>Two Player (Local Player)</li>
              <li>Two Player (Remote Player)</li>
              <li>One Player (Play with computer)</li>
            </ul>
            <b-button to="/tic-tac-toe" variant="primary">Play Now</b-button>
          </template>
        </Card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/card/Card.vue";

export default {
  name: "Home",
  components: { Card }
};
</script>

<style scoped lang="scss">
li {
  text-align: left;
  margin: 0.5rem;
}
</style>
