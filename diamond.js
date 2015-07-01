// http://www.codewars.com/kata/5579e6a5256bac65e4000060/train/javascript
// spread from center

function pattern(n) {
  if (n <= 0) {return ''};
  var output = '', maxWidth = n * 2 - 1;
  var arr = new Array(maxWidth);
  for (var i=0; i < maxWidth; i++) {
    var _arr = new Array(maxWidth);
    for (var j=0; j < maxWidth; j++) {
      _arr[j] = ' ';
    };
    arr[i] = _arr;
  };
  var centerX = n - 1, centerY = n - 1;
  arr[centerY][centerX] = n % 10;
  for (var dis=1; dis < n; dis++) {
    var _arr = [], v = (n - dis) % 10;
    for (var i=-dis; i <= dis; i++) {
      var j = dis - Math.abs(i);
      //console.log('i, j', i, j, 'v is', v);
      arr[centerY + i][centerX + j] = v;
      arr[centerY + i][centerX - j] = v;
    };
  };
  output = arr.map(function(r) {
    return r.join('');
  }).join('\n');
  return output;
}

console.log(pattern(7));
