//     *
//    * *
//   *   *
//  *     *
// *********

let rows = 5;
let starCount = 1;

for (let i = 1; i <= rows; i++) {
  let spacing = "";
  let stars = "";

  //add left spacing
  for (let j = 0; j < rows - i; j++) {
    spacing = spacing + " ";
  }

  // add stars
  for (let k = 0; k < starCount; k++) {
    if (i == rows) {
      stars = stars + "*";
    } else if (k == 0 || k == starCount - 1) {
      stars = stars + "*";
    } else {
      stars = stars + " ";
    }
  }
  console.log(spacing + stars);
  starCount = starCount + 2;
}
