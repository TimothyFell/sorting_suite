function bubbleSort(a) {
  sa = Array.from(a);
  var flip;
  do {
    flip = false;
    for (var i = 1; i < sa.length; ++i) {
      if (sa[i - 1] > sa[i]) {
        [ sa[i], sa[i - 1] ] = [ sa[i - 1], sa[i] ];
        flip = true;
      }
    }
  } while (flip == true)
  return sa;
}

module.exports = bubbleSort
