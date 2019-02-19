const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Nick',
      age: 40
    });
  }, 3000);
  // reject('Error! Something went wrong');
});

console.log('before');

// Promise chanining

promise
  .then(data => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: 'This is the other promise fucker'
        });
      }, 3000);
    });
  })
  .then(obj => {
    console.log('Does this run?', obj);
  })
  .catch(error => {
    console.log('error:', error);
  });

console.log('after');
