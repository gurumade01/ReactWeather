function addPromise(a,b) {
  return new Promise(function(resolve,reject){
    if(typeof a == 'number' && typeof b == 'number') {
      resolve(a+b);
    } else {
      reject('a and b should be numbers');
    }
  });
}


addPromise(2,'c').then(function(sum){
  console.log(sum);
},function(err){
  console.log(err);
});
