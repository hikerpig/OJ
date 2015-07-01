// http://www.codewars.com/kata/5464d6811e0c08e574000b76/train/coffeescript

// 先用递归看下能不能解决
// TODO: 到边缘的时候不能走某条路

function findZombies(matrix) {
  console.log('matrix', matrix);
  var matrixH = matrix.length, matrixW = matrix[0].length;
  var zval = matrix[0][0];
  var flat = new Array(matrixW * matrixH), out = [], checked = flat.slice();
  var maxP = flat.length;
  var stepBox = [1, -1, matrixW, -matrixW];
  for (var i=0; i < maxP; i++) { flat[i] = 0 };
  flat[0] = 1; // from top left
  nextContaminated(0, 1, true);
  function getCoords(c) {
    if (c >= maxP) {return null};
    var row = (c / matrixW) >> 0, col = c % matrixW;
    return [row, col];
  }
  function shouldRejectNext(c, step) {
    if (c + step < 0) {return true};
    if (step === 1) {
      //if (c >= matrixSide && (c + 1) % matrixSide === 0) return true;
      if (c >= matrixW && (c + 1) % matrixW === 0) return true;
    } else if (step === matrixW) {
      if (((c / matrixW) >> 0) === (matrixH - 1)) return true;
    };
    return false;
  }
  function formStepBox(c, prevStep) {
    var _stepBox = [];
    for (var i = stepBox.length - 1; i >= 0; i--){
      var step = stepBox[i];
      if (step == -prevStep || shouldRejectNext(c, step)) {
        continue;
      };
      _stepBox.push(step);
    };
    return _stepBox;
  }
  function nextContaminated(c, prevStep) {
    //console.log(`c is ${c}, prevStep is ${prevStep}`);
    var _stepBox = formStepBox(c, prevStep);
    var coords = getCoords(c), site;
    if (!coords) {
      console.log('no coords');
      return
    };
    if (checked[c]) {return};
    checked[c] = 1;
    site = matrix[coords[0]][coords[1]];
    if (site === zval) {
      //console.log('site == zval');
      flat[c] = 1;
      for (var i = _stepBox.length - 1; i >= 0; i--){
        var step = _stepBox[i];
        nextContaminated(c + step, step, true);
      };
    }
  }
  for (var i=0; i < matrixH; i++) {
    var cutted = flat.splice(0, matrixW);
    out.push(cutted);
  };
  return out;
}

//var exp1 = [
//  [ 8, 2, 3 ],
//  [ 8, 8, 8 ],
//  [ 8, 2, 8 ],
//  [ 1, 2, 8 ] ];
//var out1 = findZombies(exp1);
//console.log(out1);

//var exp2 = [
//  [ 2, 2, 3, 4, 5, 6, 7, 1 ],
//  [ 1, 2, 3, 4, 1, 6, 1, 1 ],
//  [ 1, 2, 2, 2, 2, 1, 7, 1 ],
//  [ 5, 1, 1, 1, 5, 1, 7, 1 ],
//  [ 5, 2, 3, 4, 1, 1, 7, 1 ],
//  [ 1, 2, 1, 4, 5, 1, 1, 1 ],
//  [ 1, 1, 1, 1, 1, 1, 0, 1 ],
//  [ 1, 1, 3, 4, 4, 1, 3, 1 ] ];
//var out2 = findZombies(exp2);
//console.log(out2);

//var exp3 = [
//  [ 1, 2, 3, 4, 5, 6, 7, 1 ],
//  [ 1, 1, 1, 4, 1, 6, 1, 1 ],
//  [ 1, 2, 1, 2, 2, 1, 7, 1 ],
//  [ 5, 1, 1, 1, 5, 1, 7, 1 ],
//  [ 5, 2, 3, 1, 1, 1, 7, 1 ],
//  [ 1, 2, 1, 4, 5, 1, 1, 1 ],
//  [ 1, 1, 1, 1, 1, 1, 0, 1 ],
//  [ 1, 1, 3, 4, 4, 1, 3, 1 ] ];
//var out3 = findZombies(exp3);
//console.log(out3);

var exp4 = [
[ 1, 2, 3, 4, 5, 6, 7, 1 ],
[ 1, 1, 1, 4, 1, 6, 1, 1 ],
[ 1, 2, 1, 2, 2, 1, 7, 1 ],
[ 5, 1, 1, 1, 5, 1, 7, 1 ],
[ 5, 2, 3, 1, 1, 1, 7, 1 ],
[ 1, 2, 1, 4, 5, 1, 1, 1 ],
[ 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 1, 3, 4, 4, 1, 3, 1 ] ];
var out4 = findZombies(exp4);
console.log(out4);

