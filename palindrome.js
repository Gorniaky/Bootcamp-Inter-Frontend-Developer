function verifyPalindrome(string) {
  if (!string || typeof string !== 'string') return;

  const a = string.replaceAll(' ', '').split('').reverse().join('').toLowerCase(),
    b = string.replaceAll(' ', '').toLowerCase();

  return a === b;
}

const string = 'Roma me tem amor',
  string2 = 'Roma',
  string3 = '@abba!';

console.log(verifyPalindrome(string), verifyPalindrome(string2), verifyPalindrome(string3));