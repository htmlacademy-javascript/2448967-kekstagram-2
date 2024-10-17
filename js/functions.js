//task 1

const checkLength = (text, maxLength) => text.length <= maxLength;

//console.log(checkLength('gjglh', 10))


// task 2

const checkPalindrome = (text) => {
    const currentText = text.replaceAll(' ', '').toLowerCase();
    let palindrome = '';

    for (let i = currentText.length - 1; i >= 0; i--) {
        palindrome = palindrome + currentText.at(i);
    }

  return palindrome === currentText;
}

//console.log(checkPalindrome('Шалаш'))

//task 3

const cutNumber = (text) => {
  const currentText = String(text);
  let number = '';
  for (let i = 0; i < currentText.length; i++) {
    if (!Number.isNaN(parseInt(currentText.at(i), 10))) {
      number = number + currentText.at(i);
    }
  }

  return parseInt(number, 10);
}

//console.log(cutNumber('dhjlh4 hlfgh3 f7 j e8'))

// 4378