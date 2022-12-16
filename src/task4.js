function palindrome(number) {
  if (!number) {
    return {
      status: 'failed',
      reason: 'You have to pass a number as a parameter to the function',
    };
  }
  if (typeof number !== 'number') {
    return {
      status: 'failed',
      reason:
        "Please check that you're passing a number as a parameter to the function",
    };
  }
  let str = number.toString();
  let arr = str.split('');
  let palindromes = [];
  arr.forEach((item, index) => {
    let startingIndex = 0;
    while (startingIndex < index) {
      if (check(str, index, startingIndex)) {
        palindromes.push(str.substring(startingIndex, index));
      }
      startingIndex++;
    }
  });
  return palindromes.length === 0 ? 0 : palindromes;
}

function check(str, index, startingIndex) {
  let num = parseInt(str.substring(startingIndex, index));
  if (num >= 10) {
    let arr = str.substring(startingIndex, index).split('');
    let arr2 = [...arr];
    arr2.reverse();

    let str1 = arr.join('');
    let str2 = arr2.join('');
    return str1 === str2;
  }
  return false;
}

export { palindrome };
