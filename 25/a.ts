export function getNumber(column: number, row: number): number {
  let number = 0;
  for (let x = 1; x <= column; x++) {
    number += x;
  }

  for (let y = 1; y < row; y++) {
    number += column + (y - 1);
  }

  return number;
}

export function findCode(codeNumber: number): number {
  let code = 20151125;

  for (let i = 1; i < codeNumber; i++) {
    code = code * 252533 % 33554393;
  }

  return code;
}

function solve(column: number, row: number): number {
  const codeNumber = getNumber(column, row);
  const code = findCode(codeNumber);
  return code;
}

// To continue, please consult the code grid in the manual.  Enter the code at row 2978, column 3083.
console.info(solve(3083, 2978));
