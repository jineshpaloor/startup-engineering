#!/usr/bin/env node

var isPrime = function(n){
  var result = true;
  for(var i=2; i<=n/2; i++){
    if(n%i == 0){
      result = false;
      break;
    }
  }
  return result;
};

var fmt = function(arr){
  return arr.join(",");
};

var generatePrimes = function() {
  var fs = require('fs');
  var n = 100;
  var arr = [];
  var p = 2;
  while (n >= 1){
    if (isPrime(p)){
      arr.push(p)
      n = n-1;
    }
    p = p+1;
  }
  fs.writeFileSync('primes.txt', fmt(arr));
};

generatePrimes();
