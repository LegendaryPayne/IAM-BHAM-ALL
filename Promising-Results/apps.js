function chaining(a,b,c,d,e,f,g,h,i,j) {
slowMath
  .add(a, b)
  .then(results => {
    console.log(`the sum of ${a} and ${b} is ${results}`);
    return slowMath.multiply(results, c);
  })
  .then(results => {
    console.log(`Then multiply it by ${c}, the answer is ${results}`);
    return slowMath.divide(results, d);
  })
  .then(results => {
    console.log(`Then divide it by ${d}, the answer is ${results}`);
    return slowMath.subtract(results, e);
  })
  .then(results => {
    console.log(`Then substracting ${e} to it, the answer is ${results}`);
    return slowMath.add(results, f);
  })
  .then(results => {
    console.log(`Then adding ${f} to it, the answer is ${results}`);
    return slowMath.remainder(results, g);
  })
  .then(results => {
    console.log(`Then the reminder of it when dividing by ${g}, the answer is ${results}`);
    return slowMath.multiply(results, h);
  })
  .then(results => {
    console.log(`Then multiplying it by ${h}, the answer is ${results}`);
    return slowMath.remainder(results, i);
  })
  .then(results => {
    console.log(`Then the reminder of it when dividing by ${i}, the answer is ${results}`);
    return slowMath.add(results, j);
  })
  .then(results => {
    console.log(`Finally, adding ${j} to it, the answer is ${results}`);
  }).catch ((err) => {
      console.log(err);
  });
}
chaining(6,2,2,4,3,98,2,50,40,32)