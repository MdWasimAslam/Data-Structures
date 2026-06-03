//     1
//    123
//   12345
//  1234567
// 123456789

let count = 1;

for (let i = 1; i <= 5; i++) {
  let spaces = "";
  let stars = "";
  // for left cpaces
  for (let j = 4; j >= i; j--) {
    spaces += " ";
  }

  for (let k = 1; k <= count; k++) {
    stars += k;
  }
  count += 2;
  console.log(spaces + stars);
}
