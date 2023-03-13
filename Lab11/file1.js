// In ra dãy số chẵn trong khoảng từ 1 - 100
function printEvenNumbers() {
  // Code

  // for (let i = 0; i <= 100; i += 2) {
  //   console.log(i);
  // }

  let i = 0;
  while (i <= 100) {
    console.log(i);

    i += 2;
  }
}

console.log(`Dãy số chẵn trong khoảng từ 1 - 100`);
// printEvenNumbers();

// In ra dãy số lẻ trong khoảng từ 1 - 100 theo thứ tự giảm dần
function printOddNumbers() {
  // Code
  // for (let i = 99; i > 0; i -= 2) {
  //   console.log(i);
  // }

  let i = 99;

  while (i > 0) {
    console.log(i);

    i -= 2;
  }
}
console.log(`Dãy số lẻ trong khoảng từ 1 - 100 theo thứ tự giảm dần`);
printOddNumbers();

// Tính tổng các số chẵn trong khoảng 1 - n
function sumOfEvenNumbers(n) {
  for (i = 1; i <= 100; i+)

  return; // Kết quả
}

console.log(`Tổng các số chẵn trong khoảng 1 - 100: ${sumOfEvenNumbers(100)}`);


console.log(`Tổng các số chẵn trong khoảng 1 - 100: ${sumOfEvenNumbers(100)}`);

// Tính tổng các số chia hết cho 3 và 5 trong khoảng 1 - n
function sumOfNumbersDivisibleBy3And5(n) {
  // Code
// let sum = 0;

  // for (let i = 1; i <= n; i++) {
  //   if (i % 15 == 0) sum += i;
  // }
  
  
  let sum = 0;
  let i = 1;

  while (i <= n) {
    if (i % 15 == 0) {
      sum += i;
      i += 15;
    } else {
      i++;
    }
  }

  return sum; // Kết quả
}

console.log(
  `Tổng các số chia hết cho 3 và 5 trong khoảng 1 - 100: ${sumOfNumbersDivisibleBy3And5(
    100
  )}`);


console.log(
  `Tổng các số chia hết cho 3 và 5 trong khoảng 1 - 100: ${sumOfNumbersDivisibleBy3And5(
    100
  )}`
);

// In ra các ước số của một số
function printDivisorOfNumber(n) {
  // Code
}

console.log(`Các ước số của 12`);
printDivisorOfNumber(12);

// In ra số bảng cửu chương của 1 số
// 1 x 1 = 1
// 1 x 2 = 2
// ...
function printTimesTableOf(n) {
  // Code
  // for (let i = 1; i <= 10; i++) {
  //   let cuuchuong = n * i;
  //   console.log(`${n} x ${i} = ${cuuchuong}`);
  // }

  let i = 1;
  for (i <= 10) {
    let cuuchuong = n * i;
    console.log(`${n} x ${i} = ${cuuchuong}`);
    i++;
  }
}

console.log(`Bảng cửu chương của 1`);


console.log(`Bảng cửu chương của 1`);
printTimesTableOf(1);

// In ra bảng cửu chương từ 1 đến 10
// 1 x 1 = 1
// 1 x 2 = 2
// ..
// 2 x 1 = 2
// 2 x 2 = 4
// ...
function printTimesTable() {
  // Code
  for (let n = 0; n <= 10; n++){
    for (let i = 1; i <= 10; i++) {
      console.log('${n}x${i}={n * i}');
    }
  }
}

console.log(`Bảng cửu chương`);
printTimesTable();

// Giải bài toán dân gian
// Vừa gà vừa chó
// Bó lại cho tròn
// Ba mươi sáu con
// Một trăm chân chẵn
// In ra số chân gà và chó
function findLegs() {
  // Code
  const CHICKEN_LEGS = 2;
  const DOG_LEGS = 4;
  const TOTAL = 36;
  const TOTAL_LEGS = 100;

  let chicken = 1;
  let dogs = TOTAL - chicken;

  // for (
  //   ;
  //   chicken * CHICKEN_LEGS + dogs * DOG_LEGS != TOTAL_LEGS;
  //   chicken++, dogs--
  // ) {}

  while (chicken * CHICKEN_LEGS + dogs * DOG_LEGS != TOTAL_LEGS) {
    chicken++;
    dogs--;
  }

  console.log(`Số gà là ${chicken}, số chó là ${dogs}`);
}
findLegs();