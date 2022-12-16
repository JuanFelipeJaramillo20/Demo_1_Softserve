// To solve this problem, I'm going to assume that context.min and context.max always have 6 digits.
function luckyTickets(context) {
  if (!context) {
    return {
      status: 'failed',
      reason:
        'You have to pass an object that has a numeric property min and a numeric property max as a parameter to the function',
    };
  }
  if (!context.min || !context.max) {
    return {
      status: 'failed',
      reason:
        'Please check that the context parameter has both a min and max property',
    };
  }

  if (typeof context.min !== 'number' || typeof context.max !== 'number') {
    return {
      status: 'failed',
      reason:
        'Please check that both the min and max properties are numeric values',
    };
  }
  let min = parseInt(context.min);
  let max = parseInt(context.max);
  let easyTickets = 0;
  let hardTickets = 0;
  for (let i = min; i < max; i++) {
    let numString = i.toString();
    let firstNum = parseInt(numString[0]);
    let secondNum = parseInt(numString[1]);
    let thirdNum = parseInt(numString[2]);
    let fourthNum = parseInt(numString[3]);
    let fifthNum = parseInt(numString[4]);
    let sixthNum = parseInt(numString[5]);
    if (firstNum + secondNum + thirdNum === fourthNum + fifthNum + sixthNum) {
      easyTickets++;
    }
    if (secondNum + fourthNum + sixthNum === firstNum + thirdNum + fifthNum) {
      hardTickets++;
    }
  }
  if (easyTickets === hardTickets) {
    return (
      'Both methods offer the same ammount of luckyTickets: ' + easyTickets
    );
  }
  return easyTickets > hardTickets
    ? 'The winning method is easy tickets with: ' +
        easyTickets +
        ' vs complicated tickets with: ' +
        hardTickets
    : 'The winning method is complicated tickets with: ' +
        hardTickets +
        ' vs easy tickets with: ' +
        easyTickets;
}

export { luckyTickets };
