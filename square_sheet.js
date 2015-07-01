// http://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript

function decompose(n) {
  var s = square(n);
  var memList = [];
  for (var i = n - 1; i >= 1; i--){
    var remained = s - getSquare(i);
    var maybeArr = _decomp(remained, [i]);
    if (maybeArr) {return maybeArr};
  };
  return null;

  function _decomp(sn, arr) {
    var _sn, _root = Math.sqrt(sn) >> 0, _arr;
    arr = (arr || []).slice();
    console.log('sn is', sn, 'arr is', arr, '_root is', _root);
    for (var j = _root; j >= 1; j--){
      _sn = sn;
      _arr = arr.slice();
      if (_sn < 1) {continue;}
      else if ((_sn === 1)) {
        if (!~_arr.indexOf(1)) {return [1].concat(_arr)};
        continue;
      };
      if (~_arr.indexOf(j)) {continue};
      _sn -= getSquare(j);
      _arr.unshift(j);
      if (_sn === 0) {return _arr}
      var maybeR = _decomp(_sn, _arr);
      if (maybeR) {return maybeR};
    }
    return null;
  }

  function getSquare(n) {
    return memList[n] ? memList[n]: (memList[n] = square(n));
  }
  function square(n) { return n * n; }
}


//console.log(decompose(7));
//console.log(decompose(2));
//console.log(decompose(50));

// a * a - b * b = (a + b)(a - b)

// best

//  function decomposeAux(nb, rac) {
//      if (nb == 0) return [];
//      var i = rac;
//      var l = null;
//      while (i >= ~~Math.sqrt(nb / 2.0) + 1) {
//          var diff = nb - i * i;
//          var r = ~~Math.sqrt(diff);
//          l = decomposeAux(diff, r);
//          if (l != null) {
//              l.push(i);
//              return l;
//          }
//          i--;
//      }
//      return l;
//  }
//  function decompose(n) {
//      l = decomposeAux(n * n, ~~Math.sqrt(n * n - 1));
//      if (l != null)
//          return l;
//      else
//          return null;
//  }
