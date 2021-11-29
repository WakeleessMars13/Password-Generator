// Assignment code here
const resultDOM = document.getElementById('password');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const lowercaseDOM = document.getElementById('lowercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('generator-form');

// Generating Character Codes
const CODES = arrayFromLowToHigh(31,32);
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeLowercase = lowercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});

// Password Generating Function
let generatePassword = (
  characterAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = CODES;
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CODES);
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};

// Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}