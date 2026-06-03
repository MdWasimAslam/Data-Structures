// Armstrong number (153 = 1³ + 5³ + 3³)

function isArmstrong(num) {
  let originalNum = num;
  let result = 0;
  while (num > 0) {
    lastDigit = num % 10;
    result = result + lastDigit * lastDigit * lastDigit;
    num = Math.floor(num / 10);
  }
  console.log(result === originalNum);
}

isArmstrong(153);
