<template>
  <div class="board-wrapper">
    <div class="utility-button">
      <IconButton @clicked="handleReset" customClass="reset-button">
        <i class="fas fa-redo"></i>
      </IconButton>

      <IconButton @clicked="handleReset" customClass="setting-button">
        <i class="fas fa-cog"></i>
      </IconButton>
    </div>
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
import Box from "./Box";
import IconButton from "@/components/buttons/IconButton";

import { checkWinner } from "@/utils/tic-tac-toe.js";

export default {
  name: "Board",
  components: { Box, IconButton },

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
    },
    handleReset() {
      if (!this.isGameOver()) {
        let reset = confirm("Wanna reset a game?");

        if (!reset) {
          return;
        }
      }
      this.boxesValue = Array(3)
        .fill(null)
        .map(() => Array(3).fill(null));
      this.isXTurn = Math.random() < 0.5;
      this.winningPlayer = null;
      this.winningSet = [];
      this.numberOfBoxFilled = 0;
    }
  }
};
</script>

<style scoped lang="scss">
.board-wrapper {
  border-radius: 5px;
  width: 400px;
  min-height: 450px;
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;

  .utility-button {
    margin: -1rem -1rem 1rem auto;

    .reset-button {
      background: #d9534f;
    }
  }

  .reload-btn {
    color: white;
  }

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

  .reset-button {
    background: #d9534f;
    margin: 0.5rem;
  }

  .setting-button {
    background: #f0ad4e;
  }
}
</style>
