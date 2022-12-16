function nummericSequence(length, m) {
  if (!length && !m) {
    return {
      status: 'failed',
      reason:
        'You have the pass the ammount of numbers that you want to get as a sequence, and also need to pass a number m wich will be the minimun square of the numbers that go into the sequence',
    };
  }
  if (!length) {
    return {
      status: 'failed',
      reason:
        'Please pass the ammount of numbers that you want to get as a sequence',
    };
  }
  if (!m) {
    return {
      status: 'failed',
      reason:
        'Please pass the minimum square of the numbers that go into the sequence',
    };
  }

  if (
    typeof m !== 'number' ||
    typeof length !== 'number' ||
    m < 0 ||
    length < 0
  ) {
    return {
      status: 'failed',
      reason:
        'Please check the validity of the parameters, both parameters must be numbers greater than zero',
    };
  }
  let seq = [];
  for (let i = 0; true; i++) {
    if (seq.length >= length) {
      break;
    }
    if (i * i > m) {
      seq.push(i);
    }
  }
  return seq;
}

export { nummericSequence };
