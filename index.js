// function checkEvenOdd(x) {
//   if (x % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// const res = checkEvenOdd(10);
// console.log(res);

// function printName(x) {
//   for (let i = 1; i <= x; i++) {
//     console.log("fahim");
//   }
// }

// printName(1);

// function details(info) {
//   if (typeof info !== "object") {
//     return "Input should be an object";
//   } else if (typeof info.name !== "string" || typeof info.age !== "number") {
//     return "Name should be 'string' & Age should be number";
//   } else if (!info.age || !info.name) {
//     return "no value";
//   } else if (info.age <= 0) {
//     return "Age should be a positive number";
//   }
//   return `my name : ${info.name}. my age is ${info.age}`;
// }

function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "use positive Numbers";
  }
  return ticketSale * 120 - (500 + 8 * 50);
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  const lowercase = name.toLowerCase();

  const lastLatter = lowercase.slice(-1);

  if (["a", "y", "i", "e", "o", "u", "w"].includes(lastLatter)) {
    return "Good name";
  } else {
    return "Bad name";
  }
}

function deleteInvalids(array) {
  const cleanedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== undefined &&
      !isNaN(array[i]) &&
      typeof array[i] !== "object" &&
      typeof array[i] !== "string" &&
      !Array.isArray(array[i])
    ) {
      cleanedArray.push(array[i]);
    }
  }

  return cleanedArray;
}

const input = {
  name: "kolimuddin",
  birthYear: 1999,
  siteName: "google",
};

function password(obj) {
  if (
    obj.birthYear < 0 ||
    typeof obj.birthYear !== "number" ||
    obj.birthYear.toString().length !== 4 ||
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName
  ) {
    return "Invalid";
  }
  function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalName = firstLetter(obj.siteName);
  return `${capitalName}#${obj.name}@${obj.birthYear}`;
}

function calculateTotalSavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let sum = 0;
  for (let i = 0; i < payments.length; i++) {
    sum += payments[i];
  }

  const savings = sum - livingCost;
  if (savings <= 0) {
    return "earn more";
  } else {
    return savings;
  }
}

console.log(calculateTotalSavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(calculateTotalSavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(calculateTotalSavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(calculateTotalSavings(100, [900, 2700, 3400])); // Output: invalid input
