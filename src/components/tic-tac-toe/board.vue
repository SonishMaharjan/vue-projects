<template>
  <div class="board-wrapper">
    <h3>Tic Tac Toe</h3>

    <div class="player-info">
      <div
        :class="`player-one ${isXTurn ? 'current-player-turn' : ''}`"
      >{{ playerOne.name }} : {{ playerOne.sign }}</div>
      <div
        :class="`player-two ${!isXTurn ? 'current-player-turn' : ''}`"
      >{{ playerTwo.name }} : {{ playerTwo.sign }}</div>
    </div>

    <div class="game-board">
      <div class="board-row" v-for="(rows, rowIndex) in boxesValue" :key="`row${rowIndex}`">
        <Box
          v-for="(col, colIndex) in rows"
          :key="`colIndex${colIndex}`"
          :box-name="`${rowIndex}${colIndex}`"
          @clicked="handleButtonClick"
          :box-sign-value="boxesValue[rowIndex][colIndex]"
          :disabled="isGameOver()"
          :isWinningSetBox="isWinningSetBox(rowIndex, colIndex)"
        ></Box>
      </div>
    </div>

    <div class="game-over" v-if="isGameOver()">
      <h4>Game Over!!!</h4>
      <h5 v-if="winningPlayer">Won By: {{ winningPlayer.name }}</h5>
      <h5 v-else>Draw</h5>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Box from "./box";

import { checkWinner } from "@/utils/tic-tac-toe.js";

export default {
  name: "Board",
  components: { Box },
  data: () => ({
    boxesValue: Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
    isXTurn: Math.random() < 0.5,
    winningPlayer: null,
    winningSet: [],
    playerOne: { name: "Player 1", sign: "X" },
    playerTwo: { name: "Player 2", sign: "0" },
    numberOfBoxFilled: 0
  }),
  methods: {
    handleButtonClick(boxIndex) {
      let [row, col] = boxIndex.split("");
      let currentSign = this.isXTurn ? "X" : "O";
      if (!this.boxesValue[row][col]) {
        Vue.set(this.boxesValue[row], col, currentSign);
        this.numberOfBoxFilled++;

        let { winningSign, winningSet } = checkWinner(
          this.boxesValue,
          currentSign,
          row,
          col
        );
        if (winningSign) {
          this.winningPlayer =
            winningSign == "X" ? this.playerOne : this.playerTwo;
          this.winningSet = winningSet.map(row_col => row_col.join(""));
        }

        if (!this.isGameOver()) {
          this.isXTurn = !this.isXTurn;
        }
      }
    },
    isWinningSetBox(row, col) {
      return this.winningSet.includes(`${row}${col}`) ? true : false;
    },
    isGameOver() {
      return this.winningPlayer || this.numberOfBoxFilled == 9 ? true : false;
    }
  }
};
</script>

<style scoped lang="scss">
.board-wrapper {
  border-radius: 5px;
  width: 400px;
  height: 450px;
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;

  .player-info {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: 1.2rem;

    .current-player-turn {
      border-bottom: 4px solid #0275d8;
    }
  }

  .game-board {
    margin: 1.5rem 0;
  }

  .game-over {
    // margin: 0.5rem;
  }
}
</style>
