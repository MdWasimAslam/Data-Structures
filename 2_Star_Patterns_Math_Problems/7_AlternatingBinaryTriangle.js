// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + (i % 2 == 1 ? j % 2 : (j + 1) % 2);
  }
  console.log(str);
}
