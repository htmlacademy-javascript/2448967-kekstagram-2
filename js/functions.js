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

// task 4

const MINUTES_IN_HOUR = 60;

const getTimePoint = (time) => {
const [hour, min] = time.split(':');
return hour * MINUTES_IN_HOUR + Number(min)
}

const checkMeeting = (start, end, startMeet, duringMeet) => {
  const startPoint = getTimePoint(start);
  const endPoint = getTimePoint(end);
  const startMeetPoint = getTimePoint(startMeet);
  const endMeetPoint = startMeetPoint + duringMeet;
  return  (startMeetPoint >= startPoint && startMeetPoint <= endPoint && endMeetPoint >= startPoint && endMeetPoint <= endPoint)
}

// console.log(checkMeeting('8:00', '18:00', '12:00', 90))