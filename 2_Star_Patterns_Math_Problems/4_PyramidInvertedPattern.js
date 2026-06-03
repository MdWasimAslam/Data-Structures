// *********
//  *******
//   *****
//    ***
//     *

let totalStars = 9;

for (let i = 0; i < 5; i++) {
  let spaces = "";
  let stars = "";

  // creating left spaces
  for (let j = 0; j < i; j++) {
    spaces = spaces + " ";
  }

  for (let k = 0; k < totalStars; k++) {
    stars = stars + "*";
  }
  console.log(spaces + stars);
  totalStars -= 2;
}
