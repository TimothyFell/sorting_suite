function bubbleSort(a) {
  if (a.length === 1 || a.length === 0){
    return a;
  }
  // sa = Array.from(a);
  var flip;
  do {
    flip = false;
    for (var i = 1; i < a.length; ++i) {
      if (a[i - 1] > a[i]) {
        [ a[i], a[i - 1] ] = [ a[i - 1], a[i] ];
        flip = true;
      }
    }
  } while (flip == true)
  return a;
}

module.exports = bubbleSort
