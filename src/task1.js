function drawChessBoard(length, width, characterToDisplay) {
  if (!length && !characterToDisplay && !width) {
    return {
      status: 'failed',
      reason:
        'Please pass as parameters the length of the board, the width of the board and also the character to display in the board',
    };
  }
  if (!length || !characterToDisplay || !width) {
    return {
      status: 'failed',
      reason:
        "There's some parameters missing. Pease check that you're passing the length of the board, the width of the board and the character to display in the board and the character to display in the board",
    };
  }
  if (
    typeof length !== 'number' ||
    typeof width !== 'number' ||
    typeof characterToDisplay !== 'string' ||
    length <= 0 ||
    width <= 0 ||
    characterToDisplay.length > 1
  ) {
    return {
      status: 'failed',
      reason:
        'Please check the parameters, length and width must be a positive number and the character to display in the board and the character to display in the board must be a string of length 1',
    };
  }
  let sol = '';
  for (var i = 0; i < length; i++) {
    let file = '';
    let addedSpace = false;
    for (var j = 0; j < width; j++) {
      if (i % 2 !== 0 && !addedSpace) {
        file += ' ';
        addedSpace = true;
      }
      file += characterToDisplay;
    }
    sol += file + '\n';
    //console.log(file);
  }
  return sol;
}

export { drawChessBoard };
