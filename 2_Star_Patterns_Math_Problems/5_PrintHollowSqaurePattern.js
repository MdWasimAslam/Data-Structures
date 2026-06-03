// *****
// *   *
// *   *
// *   *
// *****

let rows = 5;
for (let i = 0; i < rows; i++) {
  let str = "";
  for (let j = 0; j < rows; j++) {
    // Main Logic very easy
    if (i === 0 || i === rows - 1 || j === 0 || j === rows - 1) {
      str = str + "x";
    } else {
      str = str + " ";
    }
  }
  console.log(str);
}
