//     *
//    ***
//   *****
//  *******
// *********

let totalStars = 1;

for (let row = 5 - 1; row >= 0; row--) {
  let spaces = "";
  let starPattern = "";

  // Create left spacing
  for (let space = 0; space < row; space++) {
    spaces += " ";
  }

  // Create stars
  for (let star = 0; star < totalStars; star++) {
    starPattern += "*";
  }

  console.log(spaces + starPattern);

  totalStars += 2;
}
