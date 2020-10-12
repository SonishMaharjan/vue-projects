export function checkWinner(boxes, sign, row, col) {
  var winningSet = [];

  //check row
  for (let i = 0; i < 3; i++) {
    if (boxes[row][i] !== sign) {
      break;
    }
    if (i === 2) {
      winningSet = [
        [row, 0],
        [row, 1],
        [row, 2],
      ];
      return { winningSign: sign, winningSet };
    }
  }

  //   check col
  for (let i = 0; i < 3; i++) {
    if (boxes[i][col] !== sign) {
      break;
    }

    if (i === 2) {
      winningSet = [
        [0, col],
        [1, col],
        [2, col],
      ];
      return { winningSign: sign, winningSet };
    }
  }

  //check diagnoal
  if ((Number(row) + Number(col)) % 2 === 0) {
    for (let i = 0; i < 3; i++) {
      if (boxes[i][i] !== sign) {
        break;
      }

      if (i === 2) {
        winningSet = [
          [0, 0],
          [1, 1],
          [2, 2],
        ];
        return { winningSign: sign, winningSet };
      }
    }

    for (let i = 2; i >= 0; i--) {
      if (boxes[i][2 - i] !== sign) {
        break;
      }

      if (i === 0) {
        winningSet = [
          [2, 0],
          [1, 1],
          [0, 2],
        ];
        return { winningSign: sign, winningSet };
      }
    }
  }

  return { winningSign: null, winningSet };
}
