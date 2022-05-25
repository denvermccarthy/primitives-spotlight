const sentence = 'alchemy rocks gold';

const reverseWords = (sentence) =>
  sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');

const reverseWordsTest = reverseWords(sentence);
reverseWordsTest;

const titleCase = (sentence) => {
  return sentence
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(' ');
};

const testTC = titleCase(sentence);
testTC;

const oddishOrEvenish = (num) => {
  const array = num.toString().split('');
  const sum = array.map((n) => Number(n)).reduce((a, b) => a + b, 0);
  return sum % 2 == 0 ? 'Even' : 'Odd';
};

const even = oddishOrEvenish(121);
even;
const odd = oddishOrEvenish(41);
odd;

const at = (arr, i) => (i < 0 ? arr[arr.length + i] : arr[i]);
const greater = at([2, 4, 5], 0);
greater;
const less = at([2, 4, 5], -3);
less;

const fizzBuzz = (num) => {
  const array = [];
  for (let i = 1; i < num; i++) {
    if (i % 15 == 0) {
      array.push('fizzbuzz');
    } else if (i % 3 == 0) {
      array.push('fizz');
    } else if (i % 5 == 0) {
      array.push('buzz');
    } else {
      array.push(i);
    }
  }
  return array;
};
const fizztest = fizzBuzz(16);
console.log(fizztest);

const anagrams = (wordOne, wordTwo) => {
  function splitAndSort(word) {
    return word.split('').sort().join();
  }
  return splitAndSort(wordOne) === splitAndSort(wordTwo);
};

const anagramsTest1 = anagrams('superintended', 'unpredestined');
anagramsTest1;
const anagramsTest2 = anagrams('pictorialness', 'documentarily');
anagramsTest2;

const uniqueStr = (strings) => {
  const clean = strings.filter(() => {
    return true;
  });
  return [...new Set(clean)];
};

const uniqueTest = uniqueStr([
  'Aa',
  'aaa',
  'aaaaa',
  'BbBb',
  'Aaaa',
  'AaAaAa',
  'a',
]);
uniqueTest;

const happyNumbers = (result) => {
  function splitAndSquareSum(num) {
    return Number(
      num
        .toString()
        .split('')
        .reduce((prev, curr) => {
          const toNum = Number(curr);
          return prev + toNum * toNum;
        }, 0)
    );
  }
  let num = splitAndSquareSum(result);
  while (num !== 1) {
    num = splitAndSquareSum(num);
    if (num === 1) {
      return true;
    }
    if (num === result) {
      return false;
    }
  }
};
const test = happyNumbers(7);
test;

// if (num === 1) {
//   console.log('reached');
//   returnedVal = true;
// } else if (i >= 1 && firstNum === num) {
//   console.log('reached');
//   returnedVal = false;
// } else {
//   i++;
//   happyNumbers(num, firstNum, i);
// }
