/**
 * @param {number} value
 * @returns {string | number}
 */
function zzzzOrNum(value) {

if (value % 15 === 0) {
return "FizzBuzz";
}

if (value % 3 === 0) {
return "Fizz";
}

if (value % 5 === 0) {
return "Buzz";
}

return value;
}

/**
 * @param {number[]} sequence
 * @returns {(string | number)[]}
 */
function fizzBuzz(sequence) {

const newSequence = sequence.map((e) => zzzzOrNum(e));

return newSequence;
}

module.exports = {
fizzBuzz,
zzzzOrNum,
};