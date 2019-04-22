function insertionSort(a) {
  // return original array if length = 0 or 1
  if (a.length === 1 || a.length === 0){
    return a;
  }
  var sa = [];
  var current_index = 0;
  while (current_index < a.length) {
    if (sa.length === 0) {
      sa.push(a[current_index])
    } else if (a[current_index] > sa[sa.length - 1]) {
      sa.push(a[current_index]);
    } else {
      sa_length = sa.length
      for (var i = 0; i < sa_length;) {
        if (a[current_index] < sa[i] || a[current_index] === sa[i]) {
           sa.splice(i, 0, a[current_index])
           i = sa_length
        } else {
          i++
        }
      }
    }
    current_index++
  }
  return sa
}

module.exports = insertionSort
