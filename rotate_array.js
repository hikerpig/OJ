// http://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript

function rotate(array, n) {
  if (n===0) {return array};
  array = array.slice();
  n = n % array.length;
  var tmp = array.splice(-n);
  return tmp.concat(array);
}

// best
//  function rotate(array,n){
//    n %= array.length
//    return array.slice(-n).concat(array.slice(0, -n))
//  }

data = [1,2,3,4,5];
//console.log(rotate(data, 1));
//console.log(rotate(data, 2));
console.log(rotate(data, -1));
