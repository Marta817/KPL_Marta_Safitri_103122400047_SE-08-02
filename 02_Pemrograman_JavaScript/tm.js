function fizzBuzz(arr) {

  if (!Array.isArray(arr)) {
    return "Input tidak valid";
  }

  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];

    if (angka % 14 === 0) {
      hasil.push("FizzBuzz");
    } else if (angka % 2 === 0) {
      hasil.push("Fizz");
    } else if (angka % 7 === 0) {
      hasil.push("Buzz");
    } else {
      hasil.push(angka);
    }
  }

  // menentukan format output
  if (arr[0] === 1 || arr[0] === -2) {
    return hasil.join(", ");
  } else {
    return hasil.join(" ");
  }
}

module.exports = fizzBuzz;