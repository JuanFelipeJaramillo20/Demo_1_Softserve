function sortingTriangles(triangleList) {
  if (!triangleList) {
    return {
      status: 'failed',
      reason:
        'You have to pass an array of triangles with the following properties: height and base',
    };
  }
  if (!Array.isArray(triangleList)) {
    return {
      status: 'failed',
      reason:
        'Please check the parameter sent, it must be an array of triangles with the following properties: height and base',
    };
  }
  let error = false;
  triangleList.forEach(function (triangle) {
    let keys = Object.keys(triangle);
    if (
      keys.length !== 4 ||
      typeof triangle['vertices'] !== 'string' ||
      typeof triangle[keys[1]] !== 'number' ||
      typeof triangle[keys[2]] !== 'number' ||
      typeof triangle[keys[3]] !== 'number' ||
      keys[1] !== triangle['vertices'][0].toLowerCase() ||
      keys[2] !== triangle['vertices'][1].toLowerCase() ||
      keys[3] !== triangle['vertices'][2].toLowerCase() ||
      triangle[keys[1].toLowerCase()] < 0 ||
      triangle[keys[2].toLowerCase()] < 0 ||
      triangle[keys[3].toLowerCase()] < 0
    ) {
      error = true;
    }
  });

  if (error) {
    return {
      status: 'failed',
      reason:
        'Please check the parameter sent, it must be an array of triangles with the following properties: height and base',
    };
  }

  let triangleAreas = [];
  triangleList.forEach((element, index) => {
    triangleAreas.push([
      index,
      (element[element.vertices[0].toLowerCase()] +
        element[element.vertices[1].toLowerCase()] +
        element[element.vertices[2].toLowerCase()]) /
        2,
    ]);
  });
  triangleAreas.sort();
  let sol = [];
  triangleAreas.forEach((element) => {
    sol.push(triangleList[element[0]]);
  });
  return sol;
}

export { sortingTriangles };
