// LCM of two numbers

function calculateLCM(four, six) {
  let result = 0;
  for (let i = 1; i <= four * six; i++) {
    let currentValueofSix = i * six;
    for (let j = 1; j <= four * six; j++) {
      let currentValueofFour = j * four;
      if (currentValueofFour === currentValueofSix) {
        result = currentValueofFour;
        break;
      }
    }
    if (result > 0) break;
  }
  console.log(result);
}

calculateLCM(5, 5);
