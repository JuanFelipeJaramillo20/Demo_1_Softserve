function fibonacci(context) {
  if (!context) {
    return {
      status: 'failed',
      reason:
        'You have to pass an object that can either have a length property, which will set the length of the numbers that will be calculated and returned, or you can pass an object with a min and max property that will act as a range for the returned numbers',
    };
  }

  if (!context.length && !context.min && !context.max) {
    return {
      status: 'failed',
      reason:
        'Please check the parameter, the object seems to have incorrect properties,  it must have either length or min and max properties',
    };
  }
  let f1 = 0;
  let f2 = 1;
  let f3 = 1;
  let ans = [];
  if (context.min && context.max) {
    let flag = true;
    for (let i = 0; flag; i++) {
      let num = clasicFibonacci(i);
      if (num >= context.min && num <= context.max) {
        ans.push(num);
      }
      if (num > context.max) {
        flag = false;
      }
    }
  }
  if (context.length) {
    let flag = true;
    for (let i = 0; flag; i++) {
      let num = clasicFibonacci(i);
      if (num.toString().length == context.length) {
        ans.push(num);
      }
      if (num.toString().length > context.length) {
        flag = false;
      }
    }
  }
  return ans;
}

function clasicFibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return clasicFibonacci(n - 1) + clasicFibonacci(n - 2);
}

export { fibonacci };
