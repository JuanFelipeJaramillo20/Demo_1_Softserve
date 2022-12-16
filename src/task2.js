function envelope(envelope1, envelope2) {
  if (!envelope1 && !envelope2) {
    return {
      status: 'failed',
      reason:
        'You have to pass two objects each one with the following properties: side a and side b',
    };
  }
  if (!envelope1 || !envelope2) {
    return {
      status: 'failed',
      reason:
        'Please check that you passed both parameters with the correct values',
    };
  }
  if (
    typeof envelope1 !== 'object' ||
    typeof envelope2 !== 'object' ||
    !envelope1.sides ||
    !envelope2.sides ||
    envelope1.sides[0] <= 0 ||
    envelope2.sides[0] <= 0 ||
    envelope1.sides[1] <= 0 ||
    envelope2.sides[1] <= 0 ||
    envelope1.sides.length > 2 ||
    envelope2.sides.length > 2
  ) {
    return {
      status: 'failed',
      reason:
        'Please check that you passed both parameters with the correct values, Both parameters must be objects with the property sides and this property must contains two positive numbers',
    };
  }
  if (
    envelope1.sides[0] > envelope2.sides[0] &&
    envelope1.sides[1] > envelope2.sides[1]
  ) {
    return 1;
  }
  if (
    envelope2.sides[0] > envelope1.sides[0] &&
    envelope2.sides[1] > envelope1.sides[1]
  ) {
    return 2;
  }
  return 0;
}

export { envelope };
